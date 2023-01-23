const express=require('express')
const app=express();
const cluster= require('cluster');
const os=require('os')
const port=3000;
const cores=os.cpus().length
if(cluster.isMaster){
    for(let i=0;i<cores;i++){
        cluster.fork()
    }
    
}else{
    app.get('/health',(req,res)=>{
        res.status(200)
        res.send({status:'up',cores})
    })
    app.listen(port,()=>{
        console.log(`serverisrunningon..${cluster.worker.id}`)
    })
}