const Category = require("../model/categoryModel");

let allCategoryController = async (req, res) => {
    let data = await Category.find({}).populate("ownerId");

    res.send(data);
    console.log(data);
};

module.exports = allCategoryController;
