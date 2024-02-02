const Category = require("../model/categoryModel");

let categoryController = async (req, res) => {
    let { name, ownerId } = req.body;

    let category = new Category({
        name: name,
        ownerId: ownerId,
    });
    category.save();
    console.log(category);
};

module.exports = categoryController;
