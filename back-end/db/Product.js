const mangoose=require('mongoose');
const ProductSchema = new mangoose.Schema({
    name:String,
    price:String,
    company:String,
    userID:String,
    category:String
})
module.exports=mangoose.model("products",ProductSchema);