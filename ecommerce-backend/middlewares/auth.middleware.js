const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

exports.protect = async (req, res, next) => {
  let token;

  // 1. Get token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user (safe fields only)
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({ message: "User does not exist." });
    }

    next();
  } catch (error) {
    // 4. Handle token errors explicitly
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Session has expired. Please login again.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token.",
      });
    }

    // 5. Fallback
    return res.status(401).json({
      message: "Not authorized.",
    });
  }
};
