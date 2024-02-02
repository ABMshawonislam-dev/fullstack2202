const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String,
    //     required: true,
    // },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
    },
    regularprice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["InStock", "OutOFStock"],
        default: "InStock",
    },
    rating: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);
