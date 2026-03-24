const stripe = require("../utils/stripe");
const Order = require("../models/Order.model");
const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

exports.stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata.userId;

    const cart = await Cart.findOne({ user: userId }).populate(
      "products.productId",
    );

    if (!cart) return res.json({ received: true });

    const items = cart.products.map((item) => ({
      productId: item.productId._id,
      title: item.productId.title,
      price: item.productId.finalPrice,
      quantity: item.itemCount,
    }));

    const totalAmount = session.amount_total / 100;

    // Create order
    await Order.create({
      user: userId,
      items,
      totalAmount,
      paymentIntentId: session.payment_intent,
      paymentStatus: "paid",
    });

    // Reduce stock
    for (const item of cart.products) {
      await Product.findByIdAndUpdate(item.productId._id, {
        $inc: { stock: -item.itemCount },
      });
    }

    // Clear cart
    await Cart.findOneAndDelete({ user: userId });
  }

  res.json({ received: true });
};
