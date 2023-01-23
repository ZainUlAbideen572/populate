const express=require('express')
const app=express();
const port=4000;
const bodyparser=require('body-parser')
 
const path=require('path')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/psu',()=>{
    console.log('connected to db')
})
const morgan=require('morgan')
const finalroute=require('./routes/finalroutes')
const loginroutes=require('./routes/loginroutes')
const routes=require('./routes/routes')
const pmroutes=require('./routes/pmroutes')
// const auth=require('./utils/Auth')
app.use(bodyparser.json())
app.use(morgan('combined'))
// fn is middleware middleware itself isa function as request is a lifecycle at any stage we  can get response.
// function fn(req,res,next){
//     // whenever we made the route private we need to send credentials to access the route.
//     // when we enable basic auth credentilas will be encoded into base 64 sttring and basic keyword will beappended
//     // after that we will split them and decode them.
//     const tokens=req.headers.authorization.split( );   
//     const creds=tokens[1]
//     let buff=new Buffer(creds,'base64')
//     let decodecreds=buff.toString('ascii') 
//     const credtokens=decodecreds.split(':');
//     console.log(credtokens) 
//     const[username,password]=credtokens
//     if(username=='admin' && password=='password'){
//         next();
//     }else{
//         res.send('unauthorised')

//         res.status(401)
//     }  
//     // console.log('middleware')
// }
// app.use(fn)
// app.use('/signup',loginroutes)
// app.use(auth.tokenAuth)
app.use('/',finalroute)
app.use('/pm',pmroutes)
app.use('/new',routes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})