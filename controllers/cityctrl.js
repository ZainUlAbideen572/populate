const citymodel=require('../models/citymodel')
module.exports={
    create:async(req,res)=>{
       const city= await citymodel.create({
            user_id:req.body.user_id,
            city:req.body.city,
            population:req.body.population
        })
        const citydata=await city.save()
        return res.send(citydata)
    },
    userbycity:async(req,res)=>{
        const citi=await citymodel.find({_id:req.body.city_id}).populate('user_id');
        console.log(citi)
    }
}