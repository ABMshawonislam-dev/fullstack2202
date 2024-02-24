let User = require("../model/userSchema");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
  let { email, password } = req.body;

  let existingUser = await User.find({ email: email });

  if (existingUser.length == 0) {
    res.send({ error: "Credencial is not valid" });
  } else {
    bcrypt.compare(password, existingUser[0].password, function (err, result) {
      console.log(result);
      if (result) {
        let data = {
          id: existingUser[0]._id,
          email: existingUser[0].email,
          name: existingUser[0].name,
          role: existingUser[0].role,
          verify: existingUser[0].verify,
        };
        res.send(data);
      } else {
        res.send({ error: "Credencial is not valid" });
      }
    });
  }
};

module.exports = loginController;
