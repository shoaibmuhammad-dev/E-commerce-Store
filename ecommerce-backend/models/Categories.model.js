const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    id: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

CategoriesSchema.pre("save", async function () {
  if (!this.isNew) return;

  const lastCategory = await this.constructor
    .findOne()
    .sort({ id: -1 })
    .select("id");

  this.id = lastCategory ? lastCategory.id + 1 : 1;
});

module.exports = mongoose.model("Category", CategoriesSchema);
