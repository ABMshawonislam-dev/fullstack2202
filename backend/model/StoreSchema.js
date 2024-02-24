const mongoose = require("mongoose");
const { Schema } = mongoose;

const storeSchema = new Schema({
  storename: String,
  tradenumber: String,
  voterid: String,
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Store", storeSchema);
