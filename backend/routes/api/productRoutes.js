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
const createStoreController = require("../../controllers/createStoreController");
const allStoreController = require("../../controllers/allStoreController");
const multer = require("multer");
const allProductController = require("../../controllers/allProducts");
const variantController = require("../../controllers/variantController");
const secureApi = require("../../middleware/secureApi");
const singleCategoryController = require("../../controllers/singleCategoryController");
const cartController = require("../../controllers/cartController");
const allCartController = require("../../controllers/allCart");
const createPaymentController = require("../../controllers/createPayment");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

_.get("/allproducts", allProductController);
_.get("/allcategory", allCategoryController);
_.get("/singelcategory", singleCategoryController);
_.get("/allsubcategory", allsubCategoryController);
_.get("/allstore/:id", allStoreController);
_.get("/allcart", allCartController);

_.post("/createcategory", secureApi, categoryController);
_.post("/subcategory", subCategoryController);
_.post("/products", upload.single("avatar"), productController);
_.post("/variant", upload.single("vavatar"), variantController);
_.post("/deletecategory", deleteCategory);
_.post("/deletesubcategory", deleteSubCategory);
_.post("/editcategory", editEategoryController);
_.post("/editsubcategory", editEategorySubController);
_.post("/approvecategory", approveCategoryController);
_.post("/createstore", createStoreController);
_.post("/createcart", cartController);
_.post("/createpayment", createPaymentController);

module.exports = _;
