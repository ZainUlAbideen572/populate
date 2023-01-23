const finalmodel=require('../models/finalmodel')
const reviewmodel=require('../models/reviewmodel')
const get=(page,limit,search)=>{
      const rowstoskip=(page-1)*limit
      const filter={
        $or:[
            {type:search},
            {origin:search}
        ]
      }
     return finalmodel.find(filter)
    .skip(rowstoskip)
    .limit(limit)
}
const getcount=(search)=>{
    const filter={
        $or:[
            {type:search},
            {origin:search}
        ]
      }
    return finalmodel.count(filter)
}
const create=(data)=>{
    const product=new finalmodel(data)
    return product.save()
}
const remove=(id)=>{
    return finalmodel.remove({_id:id})
}
const getbyid=(id)=>{
    return finalmodel.find({_id:id})
}
const update=(id,data)=>{
        return finalmodel.updateOne({_id:id},{$set:{
            name:data.name,
            type:data.type,
            origin:data.origin
        }})
}
const partial=(id,data)=>{
    delete data._id;
    const updobj={}
    for(var keys in updobj){
        updobj[name]=data[name]
        updobj[type]=data[type]
        updobj[origin]=data[origin]
    }
    return finalmodel.updateOne({_id:id},{$set:updobj})
}
const addReview=(data)=>{
    const review=new  reviewmodel(data)
    return review.save()
}
const getreviewbyid=(id)=>{
    return reviewmodel.findOne({id})
}
module.exports={
    get,remove,update,create,partial,getcount,getbyid,addReview,getreviewbyid
}