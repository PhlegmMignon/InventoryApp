const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PillowcaseSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 50 },
  description: { type: String },
  material: { type: String },
  price: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model("Pillowcase", PillowcaseSchema);
