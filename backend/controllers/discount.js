const Discount = require("../model/discount");
const Product = require("../model/productSchema")

let createDiscount =async (req, res) => {
  const { name, amount, type,productId } = req.body;

  if(type=="delivery"){
    if(amount > 50){
        return res.send("Invalid Discount")
    }
  }else if(type == "percentage"){
    if(amount > 100){
        return res.send("Invalid Discount")
    }


  }else if(type == "fixed"){
    if(productId){
        let pro = await Product.find({_id:productId})
        if(amount > pro.price){
            return res.send("Invalid Discount")
        }
    }
  }else{
    let discount = new Discount({
        name: name,
        type: type,
        amount: amount,
      });
    
      discount.save();
      res.send({ success: "discount Created!!" });
  }

 
};

module.exports = createDiscount;
