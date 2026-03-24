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
    const users = await User.find().select(
      "-__v -createdAt -updatedAt -lastLoginAt",
    );
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: { users },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
