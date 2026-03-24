const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");

router.post("/checkout", protect, checkout);

module.exports = router;
