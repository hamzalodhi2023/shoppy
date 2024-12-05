const productModel = require("../../models/product");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      const product = await productModel.find({});
      return res.status(200).json({
        success: true,
        data: product,
      });
    }

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    // Handle any server errors
    debug(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
