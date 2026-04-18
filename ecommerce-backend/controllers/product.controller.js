const cloudinary = require("../utils/cloudinary");
const Product = require("../models/Product.model");
const mongoose = require("mongoose");
const Category = require("../models/Categories.model");

exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      description,
      price,
      discountPercentage,
      category,
      stock,
      slug,
      isActive,
      isNewArrival,
      isFeatured,
    } = req.body;

    // 1. Validate input
    if (
      !title ||
      !description ||
      !shortDescription ||
      !price ||
      !category ||
      !stock ||
      !slug
    ) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    const existingProduct = await Product.findOne({ title });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: `Product with title '${title}' already exists.`,
      });
    }

    const existingProductSlug = await Product.findOne({ slug });

    if (existingProductSlug) {
      return res.status(400).json({
        success: false,
        message: `Product with slug '${slug}' already exists.`,
      });
    }

    // 2. Upload cover image
    if (!req.files?.coverImage) {
      return res.status(400).json({
        message: "Cover image is required",
      });
    }

    const coverUpload = await cloudinary.uploader.upload(
      req.files.coverImage[0].path,
      { folder: "products/cover" },
    );

    // 3. Upload gallery images (optional)
    let galleryImages = [];

    if (req.files.images?.length) {
      const uploads = req.files.images.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: "products/gallery",
        }),
      );

      const results = await Promise.all(uploads);

      galleryImages = results.map((img) => img.secure_url);
    }

    const product = await Product.create({
      title,
      shortDescription,
      description,
      price,
      discountPercentage,
      category,
      stock,
      slug,
      coverImage: coverUpload.secure_url,
      images: galleryImages,
      isActive,
      isNewArrival,
      isFeatured,
    });

    const populatedProduct = await product.populate("category");

    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      product: populatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      category,
      minPrice,
      maxPrice,
      sort = "-createdAt",
      inStock,
      isActive,
      sortBy,
    } = req.query;

    // Sorting logic
    let sortOption = { createdAt: -1 }; // default: new to old

    if (sortBy) {
      switch (sortBy) {
        case "low-to-high":
          sortOption = { price: 1 };
          break;

        case "high-to-low":
          sortOption = { price: -1 };
          break;

        case "old-to-new":
          sortOption = { createdAt: 1 };
          break;

        case "new-to-old":
          sortOption = { createdAt: -1 };
          break;

        default:
          sortOption = { createdAt: -1 };
      }
    }

    // Build filter object
    const filter = {};

    // Search (title + description)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Category filter
    if (category) {
      const categoryDoc = await Category.findOne({ slug: category });

      if (categoryDoc) {
        filter.category = categoryDoc._id;
      } else {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
    }

    // Price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Stock filter
    if (inStock === "true") {
      filter.stock = { $gt: 0 };
    }

    // Active filter
    if (isActive !== undefined) {
      filter.isActive = isActive === "true";
    }

    // Pagination calculations
    const skip = (Number(page) - 1) * Number(limit);

    // Query
    const products = await Product.find(filter)
      .populate("category", "title slug id")
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    // Total count (for pagination)
    const total = await Product.countDocuments(filter);

    const pagination = {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      limit: Number(limit),
    };

    // Response
    res.status(200).json({
      success: true,
      products,
      pagination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    // 1. Validate slug
    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Product slug is required",
      });
    }

    // 2. Find product by slug
    const product = await Product.findOne({ slug, isActive: true }).populate(
      "category",
      "title slug id",
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
        product: null,
      });
    }

    // 3. Success response
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Product slug is required",
      });
    }

    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const {
      title,
      description,
      price,
      discountPercentage,
      category,
      stock,
      isActive,
      isNewArrival,
    } = req.body;

    // Update basic fields (only if provided)
    if (title) product.title = title;
    if (description) product.description = description;
    if (price !== undefined) product.price = price;
    if (discountPercentage !== undefined)
      product.discountPercentage = discountPercentage;
    if (category) product.category = category;
    if (stock !== undefined) product.stock = stock;
    if (isActive !== undefined) product.isActive = isActive;
    if (isNewArrival !== undefined) product.isNewArrival = isNewArrival;

    // Update cover image (replace old one)
    if (req.files?.coverImage?.length) {
      // Optional: delete old cover image
      if (product.coverImage) {
        const publicId = product.coverImage
          .split("/")
          .slice(-2)
          .join("/")
          .split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      }

      const coverUpload = await cloudinary.uploader.upload(
        req.files.coverImage[0].path,
        { folder: "products/cover" },
      );

      product.coverImage = coverUpload.secure_url;
    }

    // Update gallery images (replace or append)
    if (req.files?.images?.length) {
      // Optional: remove existing gallery images
      for (const img of product.images) {
        const publicId = img.split("/").slice(-2).join("/").split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      }

      const uploads = req.files.images.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: "products/gallery",
        }),
      );

      const results = await Promise.all(uploads);
      product.images = results.map((img) => img.secure_url);
    }

    // Save updated product
    await product.save();

    const populatedProduct = await product.populate(
      "category",
      "title slug id",
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: populatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};

exports.toggleProductStock = async (req, res) => {
  try {
    const { slug } = req.params;
    // const { stock } = req.body;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug is required",
      });
    }

    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    // Toggle logic
    if (product.isActive) {
      // Disable product
      product.isActive = false;
      // product.stock = 0;
    } else {
      // Enable product
      // if (!stock || stock <= 0) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Stock must be provided when enabling product",
      //   });
      // }

      product.isActive = true;
      // product.stock = stock;
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: product.isActive
        ? "Product marked as in stock"
        : "Product marked as out of stock",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to toggle product stock",
      error: error.message,
    });
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const { ids } = req.body;

    // 1 Validate input
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "An array of product ids is required",
      });
    }

    // 2 Fetch products
    const products = await Product.find({ _id: { $in: ids } });

    if (!products.length) {
      return res.status(404).json({
        success: false,
        message: "No products found to delete",
      });
    }

    // 3 Delete Cloudinary images
    for (const product of products) {
      // Cover image
      if (product.coverImage) {
        const publicId = product.coverImage
          .split("/")
          .slice(-2)
          .join("/")
          .split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      }

      // Gallery images
      if (product.images?.length) {
        for (const img of product.images) {
          const publicId = img.split("/").slice(-2).join("/").split(".")[0];

          await cloudinary.uploader.destroy(publicId);
        }
      }
    }

    // 4 Delete products from DB
    const result = await Product.deleteMany({ _id: { $in: ids } });

    res.status(200).json({
      success: true,
      message:
        ids.length === 1
          ? "Product deleted successfully"
          : "Products deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product(s)",
      error: error.message,
    });
  }
};
