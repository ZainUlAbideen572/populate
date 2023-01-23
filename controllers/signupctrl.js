const signuprpstry=require('../rpstry/signuprpstry')
const crypto=require('../utils/Crypto')
const signup=async(req,res)=>{
    const data=req.body
    const hash=await crypto.gethash(req.body.password)
    console.log('hash',hash)
    req.body.password=hash
    await signuprpstry.create(data)
    res.status(201)
    res.send('created')
}
const signin=async(req,res)=>{
            const data=req.body
         const user=await signuprpstry.getbyemail(data.email)
         if(!user){
            res.status(401)
            res.send('unauthorised')
            return;
         }
         const valid=await crypto.verify(data.password,user.password)
         console.log(valid)
         if(valid){
            res.status(200)
            res.send('success')
        
         }
         else
         {
            res.status(401)
            res.send('invalid email or password')
         }
}
module.exports={
    signin,signup
}