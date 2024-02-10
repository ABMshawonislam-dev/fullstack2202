const subCategory = require("../model/subCategorySchema");

let allCategoryController = async (req, res) => {
    let data = await subCategory.find({}).populate("categoryId");

    res.send(data);
    console.log(data);
};

module.exports = allCategoryController;
