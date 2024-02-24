const Store = require("../model/StoreSchema");

let allStoreController = async (req, res) => {
  const { id } = req.params;
  let data = await Store.find({ ownerId: id });

  res.send(data);
};

module.exports = allStoreController;
