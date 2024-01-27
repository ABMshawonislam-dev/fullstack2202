const express = require("express");
const _ = express.Router()
const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const forgotPasswordController = require("../../controllers/fortgotPasswordController");
const changePasswordController = require("../../controllers/changePasswordController");
const allUserController = require("../../controllers/allUserController");


_.post("/registration",registrationController)
_.post("/otpverify",otpController)
_.post("/login",loginController)
_.post("/forgotpassword",forgotPasswordController)
_.post("/changepassword",changePasswordController)
_.get("/alluser",allUserController)


module.exports = _;