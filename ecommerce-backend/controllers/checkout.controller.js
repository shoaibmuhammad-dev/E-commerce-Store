const stripe = require("../utils/stripe");
const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "products.productId",
    );

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Validate products & stock
    const lineItems = [];

    for (const item of cart.products) {
      const product = item.productId;

      if (!product || !product.isActive) {
        return res.status(400).json({
          success: false,
          message: `Product unavailable`,
        });
      }

      if (item.itemCount > product.stock) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for ${product.title}`,
        });
      }

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            images: [product.coverImage],
          },
          unit_amount: Math.round(product.finalPrice * 100),
        },
        quantity: item.itemCount,
      });
    }

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
      metadata: {
        userId: req.user._id.toString(),
      },
    });

    res.status(200).json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Checkout failed",
      error: error.message,
    });
  }
};
