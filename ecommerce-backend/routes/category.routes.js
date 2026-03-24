const express = require("express");
const router = express.Router();
const category = require("../controllers/categories.controller");
const { protect } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/", protect, authorize("admin"), category.createCategory);
router.get("/", protect, category.getAllCategories);
router.get("/:id", protect, authorize("admin"), category.getCategory);
router.patch("/:id", protect, authorize("admin"), category.updateCategory);
router.delete("/:id", protect, authorize("admin"), category.deleteCategory);

module.exports = router;
