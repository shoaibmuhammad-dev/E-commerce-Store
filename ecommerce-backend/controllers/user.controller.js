const User = require("../models/User.model");

// GET PROFILE
exports.getProfile = async (req, res) => {
  const user = req.user.toObject();
  delete user.createdAt;
  delete user.updatedAt;
  delete user.lastLoginAt;
  delete user.__v;

  res.status(200).json({ user });
};

exports.getUsers = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;

    let query = {
      role: { $ne: "admin" },
    };

    if (search) {
      query.$or = [
        {
          firstName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          lastName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const users = await User.find(query)
      .select("-__v -createdAt -updatedAt -lastLoginAt")
      .skip(skip)
      .limit(Number(limit));

    const totalUsers = await User.countDocuments(query);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: {
        users,
        pagination: {
          totalUsers,
          currentPage: Number(page),
          totalPages: Math.ceil(totalUsers / limit),
          limit: Number(limit),
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};
