const Cart = require("../model/cartModel");

let allCartController = async (req, res) => {
  let data = await Cart.find({}).populate({
    path: 'productId',
  });
  res.send(data);
};

module.exports = allCartController;
