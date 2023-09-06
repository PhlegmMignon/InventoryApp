const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MattressSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 3,
    maxLength: 50,
  },
  stock: { type: Number, required: true, minLength: 0 },

  description: { type: String },
  material: { type: String, required: true },
  size: {
    type: String,
    enum: ["Twin, Full, Queen, King, Cali King"],
    required: [true, "Size is required"],
    minLength: 3,
    maxLength: 15,
  },
  price: { type: Number, required: [true, "Price is required"], min: 0 },
});

MattressSchema.virtual("url").get(function () {
  return `/catalog/mattress/${this._id}`;
});

module.exports = mongoose.model("Mattress", MattressSchema);
