const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
    quantity:
    {
        type: Number,
    },
    cartOwnerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    
});

module.exports = mongoose.model("Cart", cartSchema);
