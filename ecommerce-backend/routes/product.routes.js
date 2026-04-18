const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProduct,
  editProduct,
  toggleProductStock,
  deleteProducts,
} = require("../controllers/product.controller");
const upload = require("../middlewares/upload.middleware");
const { protect } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post(
  "/",
  protect,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  createProduct,
);

router.get("/", getAllProducts);
router.get("/:slug", getProduct);

router.patch(
  "/:slug",
  protect,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  editProduct,
);

router.patch("/:slug/toggle-stock", protect, toggleProductStock);

router.delete("/", protect, authorize("admin"), deleteProducts);

module.exports = router;
