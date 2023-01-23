const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:String,
   duration:{
    type:String,
    required:true,
    maxLength:20,
    minLength:3} 
})
const model=new mongoose.model('primeminister',schema)
module.exports=model;