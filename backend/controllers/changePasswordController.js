let User = require("../model/userSchema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

let changePasswordController = async (req, res) => {
  let { token, password } = req.body;
  console.log(token, password);

  jwt.verify(token, "123234", async function (err, decoded) {
    console.log(decoded.email);
    let existingUser2 = await User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          password: password,
          token: "",
        },
      },
      {
        //options
        returnNewDocument: true,
        new: true,
        strict: false,
      }
    );
  });

  // if(data[0].otp == otp){
  //     await User.findOneAndUpdate({email:email},{otp:"",verify:true})
  //     res.send({success:"Verify"})
  // }
};

module.exports = changePasswordController;
