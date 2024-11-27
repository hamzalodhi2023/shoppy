const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:read.js");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    const dropdown = await dropdownModel.findOne({ name: name });

    if (!dropdown) {
      debug("Dropdowns not found");
      return res.status(404).json({
        success: false,
        message: "Dropdowns not found",
      });
    }

    debug("Dropdowns found");
    return res.status(200).json({
      success: true,
      dropdowns: dropdown.values,
    });
  } catch (error) {
    debug("Error reading dropdowns: %o", error);
    return res.status(500).json({
      success: false,
      message: "Error reading dropdowns",
    });
  }
};
