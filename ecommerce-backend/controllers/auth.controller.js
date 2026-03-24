const User = require("../models/User.model");
const { generateToken } = require("../utils/generateToken");
const crypto = require("crypto");
const { getResetPasswordToken } = require("../models/User.model");

/* REGISTER */
exports.register = async (req, res) => {
  const user = await User.create(req.body);
  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    token,
  });
};

/* LOGIN */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  user.lastLoginAt = Date.now();
  await user.save();

  // Convert mongoose document to plain object
  const userObj = user.toObject();

  // Remove sensitive fields
  delete userObj.password;
  delete userObj.__v;
  delete userObj.createdAt;
  delete userObj.updatedAt;
  delete userObj.lastLoginAt;

  res.json({
    user: userObj,
    token: generateToken(user._id),
  });
};

/* FORGOT PASSWORD */
exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // send resetToken via email here
  res.json({ resetToken });
};

/* RESET PASSWORD */
exports.resetPassword = async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) return res.status(400).json({ message: "Invalid token" });

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.json({ message: "Password reset successful" });
};

// CHANGE PASSWORD (LOGGED IN USER ONLY)
exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // 1. Validate input
  if (!currentPassword) {
    return res.status(400).json({
      message: "Current password is required.",
    });
  }
  if (!newPassword) {
    return res.status(400).json({
      message: "New password is required.",
    });
  }

  // 2. Get user with password
  const user = await User.findById(req.user._id).select("+password");

  // 3. Verify current password
  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) {
    return res.status(401).json({
      message: "Current password is incorrect",
    });
  }

  // 4. Prevent same password reuse (optional but recommended)
  if (currentPassword === newPassword) {
    return res.status(400).json({
      message: "New password must be different from current password",
    });
  }

  // 5. Update password
  user.password = newPassword;
  user.passwordChangedAt = Date.now();

  await user.save();

  res.status(200).json({
    message: "Password updated successfully",
  });
};
