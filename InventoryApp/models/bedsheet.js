const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BedsheetSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 3,
    maxLength: 50,
  },
  stock: { type: Number, required: true, minLength: 0 },

  description: { type: String },
  size: {
    type: String,
    enum: ["Twin", "Full", "Queen", "King", "Cali King"],
    required: [true, "Size is required"],
    minLength: 3,
    maxLength: 15,
  },
  price: { type: Number, required: [true, "Price is required"], min: 0 },
});

BedsheetSchema.virtual("url").get(function () {
  return `/catalog/bedsheet/${this._id}`;
});

module.exports = mongoose.model("Bedsheet", BedsheetSchema);
