const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    subCategoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }]
});

module.exports = mongoose.model("Category", categorySchema);
