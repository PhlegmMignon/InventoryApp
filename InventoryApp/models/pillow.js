const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PillowSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 3,
    maxLength: 50,
  },
  stock: { type: Number, required: true, minLength: 0 },
  description: { type: String },
  price: { type: Number, required: [true, "Price is required"], min: 0 },
});

PillowSchema.virtual("url").get(function () {
  return `/catalog/pillow/${this._id}`;
});

module.exports = mongoose.model("Pillow", PillowSchema);
