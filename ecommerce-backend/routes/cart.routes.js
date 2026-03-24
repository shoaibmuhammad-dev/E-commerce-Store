const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCartItemQuantity,
} = require("../controllers/cart.controller");

const { protect } = require("../middlewares/auth.middleware");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/item/:productId", protect, removeFromCart);
router.delete("/", protect, clearCart);
router.patch("/item", protect, updateCartItemQuantity);

module.exports = router;
