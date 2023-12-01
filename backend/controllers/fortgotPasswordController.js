let User = require("../model/userSchema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");


let forgotPasswordController = async (req,res)=>{
    let {email} = req.body
   
    
 

    let existingUser = await User.find({email:email})
    console.log(existingUser[0].email)


    if(existingUser.length == 0){
        res.send({error:"Credencial is not valid"})
    }else{
      
        
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
            html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please change your password by click on this button <a href="http://localhost:5173/changepassword/${existingUser[0].email}">Verify</a></div></div>`,
          });

          res.send({success:"Check your email"})
    }
  


}

module.exports = forgotPasswordController