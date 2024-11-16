const { Schema, model } = require("mongoose");

const productSchema = new Schema({});

const productModel = model("product", productSchema);
module.exports = productModel;
