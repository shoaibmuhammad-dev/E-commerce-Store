const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const { uploadImage } = require("../controllers/upload.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/images", protect, upload.single("image"), uploadImage);

module.exports = router;
