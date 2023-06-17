const mangoose=require('mongoose');
const userSchema = new mangoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mangoose.model("users",userSchema);