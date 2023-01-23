const finalrpstry=require('../rpstry/finalrpstry')
const get=async(req,res)=>{
    const page=+req.params.page
    const limit=+req.params.limit
    const search=req.query.search
    const count=await finalrpstry.getcount(search)
      const data=await finalrpstry.get(page,limit,search)
      const response={
        data,count
      }
      res.json(response)
      res.status(200)
}
const post=async(req,res)=>{
    try{
    const data=req.body
    await finalrpstry.create(data)
    res.send('created')
      res.status(201)}
      catch(err){
        if(err && err.message && err.message.indexOf('validationfailed')>-1){
            console.log(err.errors)
            res.status(400)
            res.json(err.errors)
        }else{
            res.status(500)
            res.send('intrenal server error')
        }
        
      }

}
const getbyid=async(req,res)=>{
    const id=req.params.id
    const data=await finalrpstry.getbyid(id)
    const review=await finalrpstry.getreviewbyid(id)
    const comapny={...data,review}
    res.status(200)
    res.json(comapny)
}
const remove=async(req,res)=>{
    const id=req.params.id
    await finalrpstry.remove(id)
    res.send(' ')
      res.status(201)
}
const update=async(req,res)=>{
const id=req.params.id
const data=req.body
await finalrpstry.update(id,data)
res.send('updated')
      res.status(201)
}
const partial=async(req,res)=>{
    const id=req.params.id
const data=req.body
await finalrpstry.update(id,data)
res.send('updated')
      res.status(201)
}
const newReview=async(req,res)=>{
    const data=req.body
    await finalrpstry.addReview(data)
    res.status(200)
    res.send('') 
}
module.exports={
    get,partial,post,remove,update,newReview,getbyid
}