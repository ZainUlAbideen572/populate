const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
     
})

const usermodel=new mongoose.model('users',userschema)
module.exports=usermodel