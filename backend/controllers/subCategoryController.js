const SubCategory = require("../model/subCategorySchema");

let subCategoryController = async (req, res) => {
    let { name, subCategoryId } = req.body;

    let subCategory = new SubCategory({
        name: name,
        subCategoryId: subCategoryId,
    });
    subCategory.save();
};

module.exports = subCategoryController;
