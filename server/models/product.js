const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: {
      type: Array,
      default: null,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    unitOfMeasurement: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: null,
    },
    measurement: {
      type: String,
      default: null,
    },
    material: {
      type: String,
      default: null,
    },
    brand: {
      type: String,
      required: true,
    },
    stuffType: {
      type: String,
      default: null,
    },
    madeType: {
      type: String,
      enum: ["Stitched", "Non Stitched"],
      default: "null",
    },
    stock: {
      type: Number,
      required: true,
    },
    stockStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    rating: [
      {
        type: ratingSchema,
        default: null,
      },
    ],
    photos: [
      {
        type: Buffer,
        required: true,
        min: 3,
        max: 5,
      },
    ],
  },
  { timestamps: true }
);

const productModel = model("product", productSchema);
module.exports = productModel;
