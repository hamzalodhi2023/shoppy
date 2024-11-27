const productModel = require("../../models/product");

module.exports = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {}
};
