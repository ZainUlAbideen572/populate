const mongoose=require('mongoose')
const schema=mongoose.Schema({
    rating:String,
    subject:String,
    recruitment:String
})
const model=new mongoose.model('review',schema)
module.exports=model;