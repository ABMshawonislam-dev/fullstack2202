const mongoose = require("mongoose");

const { Schema } = mongoose;

const discountSchema = new Schema({
    name: String,
    amount: Number,
    type: String
    
});

module.exports = mongoose.model("Discount", discountSchema);
