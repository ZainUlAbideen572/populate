const usermodel=require('../models/usermodel')
module.exports={
    create:async(req,res)=>{
        const {name,email}=req.body
        const data=await usermodel.create({
            name,email
        })
        return res.json(data)
    }
}