const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

// Get user cart
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "products.productId",
    "title price coverImage stock",
  );

  res.status(200).json({
    success: true,
    cart: cart || { user: req.user._id, products: [] },
  });
};

// Add / Update cart item
exports.addToCart = async (req, res) => {
  const { productId, itemCount = 1 } = req.body;

  if (!productId || itemCount < 1) {
    return res.status(400).json({
      success: false,
      message: "Product ID is required",
    });
  }

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not available",
    });
  }

  if (!product.isActive) {
    return res.status(404).json({
      success: false,
      message: "Product is out of stock.",
    });
  }

  if (itemCount > product.stock) {
    return res.status(400).json({
      success: false,
      message: "Requested quantity exceeds stock",
    });
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      products: [{ productId, itemCount }],
    });
  } else {
    const itemIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (itemIndex > -1) {
      cart.products[itemIndex].itemCount = itemCount;
    } else {
      cart.products.push({ productId, itemCount });
    }

    await cart.save();
  }

  res.status(200).json({
    success: true,
    message: "Cart updated",
    cart,
  });
};

// Remove single item
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;

  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  cart.products = cart.products.filter(
    (item) => item.productId.toString() !== productId,
  );

  await cart.save();

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
    cart,
  });
};

// Clear entire cart
exports.clearCart = async (req, res) => {
  await Cart.findOneAndDelete({ user: req.user._id });

  res.status(200).json({
    success: true,
    message: "Cart cleared successfully",
  });
};

// Update cart item - Quantity
exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { productId, itemCount } = req.body;

    // 1 Validate input
    if (!productId || itemCount === undefined) {
      return res.status(400).json({
        success: false,
        message: "Product ID and itemCount are required",
      });
    }

    if (itemCount < 0) {
      return res.status(400).json({
        success: false,
        message: "itemCount cannot be negative",
      });
    }

    // 2 Fetch cart
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    // 3 Check product existence & stock
    const product = await Product.findById(productId);

    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not available",
      });
    }

    if (itemCount > product.stock) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available stock",
      });
    }

    // 4 Find item in cart
    const itemIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Product not in cart",
      });
    }

    // 5 Update or remove
    if (itemCount === 0) {
      cart.products.splice(itemIndex, 1);
    } else {
      cart.products[itemIndex].itemCount = itemCount;
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update cart",
      error: error.message,
    });
  }
};
