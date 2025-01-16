// Import required modules from mongoose
const { Schema, model } = require("mongoose");

// Define rating schema for product reviews
const ratingSchema = new Schema(
  {
    // Reference to the user who provided the rating
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    // Rating value between 1 and 5
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    ratingType: {
      type: String,
      required: true,
    },
    // User's review comment
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Define order status schema
const orderStatusSchema = new Schema(
  {
    delivered: {
      type: Number,
      default: 0,
    },
    canceled: {
      type: Number,
      default: 0,
    },
    returned: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Define main product schema
const productSchema = new Schema(
  {
    // Basic product information
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Unisex", "Boys", "Girls", "Kids", "Babies"],
    },
    price: {
      type: Number,
      required: true,
    },
    // Array of available product colors
    colors: {
      type: Array,
      default: null,
    },
    // Product categorization
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    // Product measurement details
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
    // Product specifications
    material: {
      type: String,
      default: null,
    },
    brand: {
      type: String,
      required: true,
    },
    // Clothing specific attribute
    madeType: {
      type: String,
      default: "null",
    },
    // Inventory management
    stock: {
      type: Number,
      required: true,
    },
    stockStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      required: true,
    },
    orderStatus: {
      type: orderStatusSchema,
    },
    // Pricing and promotion
    discount: {
      type: Number,
      default: 0,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    // Product ratings and reviews
    rating: [
      {
        type: ratingSchema,
      },
    ],
    // Product images (3-5 required)
    // product image name -> asdf26as2f-scarf.jpg
    photos: [
      {
        type: String,
        required: true,
        min: 3,
        max: 5,
      },
    ],
    seoTitle: {
      type: String,
      default: null,
    },
    seoDescription: {
      type: String,
      default: null,
    },
    seoKeywords: {
      type: [String],
      default: null,
    },
    taxPercentage: {
      type: Number,
      default: 0,
    },
    supplier: {
      name: { type: String, default: null },
      contact: { type: String, default: null },
    },
    warranty: {
      type: String,
      default: null,
    },
    productVideo: {
      type: String,
      default: null, // Video URL
    },
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Create and export the product model
const productModel = model("product", productSchema);
module.exports = productModel;
