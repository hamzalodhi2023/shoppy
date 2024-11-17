/**
 * Mongoose schema and model for dropdown data
 * @module models/dropdown
 */

const { Schema, model } = require("mongoose");

/**
 * Mongoose schema definition for dropdown items
 * @typedef {Object} DropdownSchema
 * @property {string} name - The name/identifier of the dropdown (required)
 * @property {string[]} values - Array of dropdown option values (required)
 * @property {Date} createdAt - Timestamp of when the document was created
 * @property {Date} updatedAt - Timestamp of when the document was last updated
 */
const dropdownSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    values: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

/**
 * Mongoose model for dropdown operations
 * @type {import('mongoose').Model}
 */
const dropdownModel = model("Dropdown", dropdownSchema);

module.exports = dropdownModel;
