const express = require("express");
const _ = express.Router();
const categoryController = require("../../controllers/categoryController");
const allCategoryController = require("../../controllers/allcategoryController");
const subCategoryController = require("../../controllers/subCategoryController");
const allsubCategoryController = require("../../controllers/allSubCategoryControllers");
const productController = require("../../controllers/productController");
const deleteCategory = require("../../controllers/deleteCategory");
const deleteSubCategory = require("../../controllers/deleteSubCategory");
const editEategoryController = require("../../controllers/editCategory");
const editEategorySubController = require("../../controllers/editSubCategory");
const approveCategoryController = require("../../controllers/approveCategoryController");


_.get("/allcategory", allCategoryController);
_.get("/allsubcategory", allsubCategoryController);

_.post("/createcategory", categoryController);
_.post("/subcategory", subCategoryController);
_.post("/products", productController);
_.post("/deletecategory", deleteCategory);
_.post("/deletesubcategory", deleteSubCategory);
_.post("/editcategory", editEategoryController);
_.post("/editsubcategory", editEategorySubController);
_.post("/approvecategory", approveCategoryController);

module.exports = _;
