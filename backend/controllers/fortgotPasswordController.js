let User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

let forgotPasswordController = async (req, res) => {
  let { email } = req.body;

  let existingUser = await User.find({ email: email });
  console.log(existingUser[0].email);

  if (existingUser.length == 0) {
    res.send({ error: "Credencial is not valid" });
  } else {
    jwt.sign({ email: email }, "123234", async function (err, token) {
      let existingUser2 = await User.updateOne(
        { email: email },
        {
          $set: {
            token: token,
          },
        },
        {
          //options
          returnNewDocument: true,
          new: true,
          strict: false,
        }
      );
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "citmern2202@gmail.com",
          pass: "ired ncek humt kavh",
        },
      });

      await transporter.sendMail({
        from: process.env.BASE_EMAIL,
        to: existingUser[0].email,
        subject: "Change Password",
        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please change your password by click on this button <a href="http://localhost:5173/changepassword/${token}">Verify</a></div></div>`,
      });

      res.send({ success: "Check your email" });
    });

    //   console.log(existingUser)
  }
};

module.exports = forgotPasswordController;
