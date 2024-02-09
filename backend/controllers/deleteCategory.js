const Category = require("../model/categoryModel")


let categoryController = async (req,res)=>{
    let {id} = req.body

    await Category.findByIdAndDelete({_id:id})

    res.send({success:"Category Delete Successfull"})

    
}

module.exports = categoryController