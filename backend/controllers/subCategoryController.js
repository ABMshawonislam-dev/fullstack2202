const SubCategory = require("../model/subCategorySchema");

let subCategoryController = async (req, res) => {
    let { name, categoryId } = req.body;

    let subCategory = new SubCategory({
        name: name,
        categoryId: categoryId,
    });
    subCategory.save();

    res.send({success:"Subcategory Created Successfull"})
};

module.exports = subCategoryController;
