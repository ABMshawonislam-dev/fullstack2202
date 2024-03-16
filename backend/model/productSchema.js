const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
