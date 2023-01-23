const jwt=require('jsonwebtoken')
function tokenAuth(req,res,next){
    const tokens=req.headers.authorization.split('');
    const authtokens=tokens[1]
    const valid=jwt.verify(authtokens,'secret')
    if(valid){
        next()
    }
    else{
        res.status(401)
        res.send('unauthorised')
        return;
    }

}
module.exports={
    tokenAuth
}