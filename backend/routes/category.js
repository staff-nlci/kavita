//import express and 
  //import router
                
const express = require('express');
const route = express.Router();
const Category=require("../db/category");
//define routes here
route.post("",async (req, res) => {
    let model = req.body
    let category= new Category({
        name: model.name
    });
  
   await category.save();
    res.send(category.toObject());
})

// create put method
route.put("/:id",async (req, res) => {
    let model = req.body
    let id= req.params['id'];
   let  category =await Category.findByIdAndUpdate(id,model,{new : true});
 
    res.send('ok');
  
})

module.exports = route;
