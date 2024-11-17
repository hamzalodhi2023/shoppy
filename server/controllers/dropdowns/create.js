const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:create.js");

module.exports = async (req, res) => {
  try {
    const { name, values } = req.body;

    const dropdown = await dropdownModel.findOne({ name });

    if (!dropdown) {
      debug("dropdown not found");
      return res.status(404).json({
        success: false,
        message: "Dropdown not found.",
      });
    }

    const newValues = [...dropdown.values, ...values];
    const updatedDropdown = await dropdownModel.findByIdAndUpdate(
      dropdown._id,
      { values: newValues },
      { new: true }
    );
  } catch (error) {
    res.json(error);
  }
};
