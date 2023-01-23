const pmrpstry=require('../rpstry/pmrpstry')
const hasvalidationerror=(err)=>{
    return err&& err.message&& err.message.indexOf('validationfailed')
}
const get=async(req,res)=>{
 const data=await pmrpstry.get()
 res.status(200)
 res.json(data)
}
const post=async(req,res)=>{
    try{
        const data=req.body
        await pmrpstry.create(data)
        res.status(201)
        res.send('created')

    }
    catch(err){
        if(hasvalidationerror(err)>-1){
            console.error(err.message)
            res.status(400)
            res.send(err.errors)           
        }else{
            res.status(500)
            res.send('intrenal server error')
        }
    }
}
module.exports={
    get,post
}