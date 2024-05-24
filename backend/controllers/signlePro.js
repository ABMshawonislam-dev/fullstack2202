const Products = require("../model/productSchema");

let singleproductController = async (req, res) => {
    let name = req.params.slug



    let data = await Products.find({name:name})
    console.log(data)
    res.send(data)
};

module.exports = singleproductController;
