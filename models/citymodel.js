const mongoose=require('mongoose')
const cityschema=new mongoose.Schema({
    city:String,
    population:Number,
    user_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'users'
    }
})
const citymodel=new mongoose.model('city',cityschema)
module.exports=citymodel