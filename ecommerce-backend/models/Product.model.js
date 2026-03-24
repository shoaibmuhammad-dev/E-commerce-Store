const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    coverImage: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    finalPrice: {
      type: Number,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    stock: {
      type: Number,
      min: 1,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    inStock: { type: Boolean, default: true },

    isActive: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: true,
    },

    isNewArrival: { type: Boolean, default: false },
  },
  { timestamps: true },
);

ProductSchema.pre("save", async function () {
  if (!this.isNew) return;

  const lastProduct = await this.constructor
    .findOne()
    .sort({ id: -1 })
    .select("id");

  this.id = lastProduct ? lastProduct.id + 1 : 1;
});

ProductSchema.pre("save", function () {
  if (!this.isModified("price") && !this.isModified("discountPercentage")) {
    return;
  }

  const discountAmount = (this.price * this.discountPercentage) / 100;

  this.finalPrice = this.price - discountAmount;
});

module.exports = mongoose.model("Products", ProductSchema);
