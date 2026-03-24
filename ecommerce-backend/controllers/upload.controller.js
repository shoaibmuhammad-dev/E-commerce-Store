const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image provided" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
    });

    res.status(201).json({
      success: true,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Image upload failed",
      error: error.message,
    });
  }
};
