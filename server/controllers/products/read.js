/**
 * Product controller module for retrieving product(s) from the database
 * @module controllers/products/read
 */
const productModel = require("../../models/product");

/**
 * Handles product retrieval requests
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {string} [req.query.id] - Optional product ID to retrieve specific product
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} JSON response with product data or error message
 */
module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    // If no ID is provided, return all products
    if (!id) {
      const product = await productModel.find({});
      return res.status(200).json({
        success: true,
        data: product,
      });
    }

    // Find specific product by ID
    const product = await productModel.findById(id);

    // Handle case where product is not found
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Return successful response with product data
    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    // Handle any server errors and return appropriate response
    debug(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
