const Category = require("../models/Categories.model");

exports.createCategory = async (req, res) => {
  try {
    const { title, slug } = req.body;

    // 1. Validate input
    if (!title || !slug) {
      return res.status(400).json({
        message: "Title and slug are required",
      });
    }

    // 2. Check duplicate
    const existingCategory = await Category.findOne({
      $or: [{ title }, { slug }],
    });

    if (existingCategory) {
      return res.status(400).json({
        message: "This category already exists",
      });
    }

    // 3. Create category
    const newCategory = await Category.create({
      title,
      slug,
    });

    res.status(201).json({
      success: true,
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create category",
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .sort({ createdAt: -1 })
      .select("-__v -createdAt -updatedAt");

    res.status(200).json({
      success: true,
      results: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories",
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid category ID",
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { title, slug } = req.body;

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    category.title = title || category.title;
    category.slug = slug || category.slug;

    await category.save();

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update category",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    await category.deleteOne();

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete category",
    });
  }
};
