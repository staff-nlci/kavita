const mongoose = require('mongoose')
const wishlistSchema =new mongoose.Schema({
userId:{type:Schema.Types.ObjectId, ref:'users'},
productId:Array(any)


});

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;