const mongoose = require('mongoose')
const cartSchema =new mongoose.Schema({
userId:{type:Schema.Types.ObjectId, ref:'users'},
productId:Array(any)


});

const Cart = mongoose.model('wishlist', cartSchema);

module.exports = cart;