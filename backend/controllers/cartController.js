const Cart = require("../model/cartModel");

let cartController = async (req, res) => {
    let {productId,quantity,cartOwnerId} =  req.body
    let type = req.query

    console.log(type)

    

    let exixtingCart = await Cart.find({productId:productId})

    if( exixtingCart.length >0){

        if(type.type == "incre"){
            let update = await Cart.findOneAndUpdate({_id:exixtingCart[0]._id},{quantity: exixtingCart[0].quantity+1},{new:true})
        
        }else{
            let update = await Cart.findOneAndUpdate({_id:exixtingCart[0]._id},{quantity: exixtingCart[0].quantity-1},{new:true})
        }
  
    }else{
        let cartData = new Cart({
            productId:productId,
            quantity:quantity,
            cartOwnerId:cartOwnerId
        })
    
        cartData.save()
        return res.send("product nai")
    }

    res.send("done")



};

module.exports = cartController;
