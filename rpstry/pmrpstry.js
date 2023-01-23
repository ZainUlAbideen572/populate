const pmmodel=require('../models/Pmmodel')
const get=()=>{
    return pmmodel.find()
}
const create=(data)=>{
    return pmmodel.save()
}
module.exports={
    get,create
}