const Subcategory = require("../model/subCategorySchema")


let subcategoryController = async (req,res)=>{
    let {id} = req.body

    await Subcategory.findByIdAndDelete({_id:id})

    res.send({success:"Sub Category Delete Successfull"})

    
}

module.exports = subcategoryController