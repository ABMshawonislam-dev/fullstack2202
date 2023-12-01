const User = require("../model/userSchema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

let registrationController = async (req,res)=>{

    let {name,email,password} = req.body


    let existingUser = await User.find({email:email})

    if(existingUser.length == 0){
        if(!name){
            res.send("Name Required")
        }else if(!email){
            
            res.send("Email Required")
            
        }else if(!password){
            res.send("Password Required")
        }else{
            let otp = otpGenerator.generate(10, { upperCaseAlphabets: false, specialChars: true });
            
             bcrypt.hash(password, 10, async function(err, hash) {
                    let user = new User({
                        name: name,
                        email: email,
                        password: hash,
                        otp:otp,
                        
                    })
            
                    user.save()
                   
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: "citmern2202@gmail.com",
                          pass: "ired ncek humt kavh",
                        },
                      });

                      const info = await transporter.sendMail({
                        from: process.env.BASE_EMAIL, 
                        to: email, 
                        subject: "Verify your Email", 
                        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a>${otp}</div></div>`,
                      });

                    res.send(user)
                });

    
            
        }
    }else{
        res.send("Email Already Exits")
    }




    
}

module.exports = registrationController