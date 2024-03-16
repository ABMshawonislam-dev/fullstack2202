const mongoose = require("mongoose");

const { Schema } = mongoose;

const variantSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

module.exports = mongoose.model("Variant", variantSchema);
