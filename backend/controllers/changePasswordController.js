let User = require("../model/userSchema")

let changePasswordController = async (req,res)=>{
    let {email,password} = req.body
    console.log("change password")
     
   

    // if(data[0].otp == otp){
    //     await User.findOneAndUpdate({email:email},{otp:"",verify:true})
    //     res.send({success:"Verify"})
    // }


}

module.exports = changePasswordController