const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:{type:String,
        minLength:3,
        required:true},
    type:String,
    origin:String,
    image:String
})
const model=mongoose.model('comapny',schema)
module.exports=model;