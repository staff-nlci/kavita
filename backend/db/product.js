const mongoose = require('mongoose')
const productSchema =new mongoose.Schema({
name:String,
shortDescription:String,
description:String,
price:Number,
purchasePrice:Number,
sellingPrice:Number,
image:Array(String),
categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'categries' },

});

const Product = mongoose.model('products', categorySchema);

module.exports = Product;