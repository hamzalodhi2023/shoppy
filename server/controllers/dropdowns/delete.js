const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:delete.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;
    const dropdown = await dropdownModel.findById(id);

    if (!dropdown) {
      debug("Dropdown not found");
      res.status(404).json({
        success: false,
        message: "Dropdown not found",
      });
    }
    dropdown.values.remove(value);
    const updatedDropdown = await dropdownModel.findByIdAndUpdate(
      id,
      { values: dropdown.values },
      {
        new: true,
      }
    );

    debug("Dropdown value deleted successfully");
    res.status(200).json({
      success: true,
      message: "Dropdown deleted successfully.",
      data: updatedDropdown,
    });
  } catch (error) {
    debug(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
