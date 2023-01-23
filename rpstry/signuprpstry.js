const signupmodel=require('../models/signupmodel')
const create=(data)=>{
    const product=new signupmodel(data)
    return product.save()
}
const getbyemail=(email)=>{
    return signupmodel.findOne({email:email})
}
module.exports={
    create,getbyemail
}