const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BedsheetSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 50 },
  description: { type: String },
  material: { type: String },
  size: { type: String, required: true, minLength: 3, maxLength: 15 },
  price: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model("Bedsheet", BedsheetSchema);
