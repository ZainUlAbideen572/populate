const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/populate',()=>{
    console.log('connected to db')
})
const port=4000
const morgan=require('morgan')
const route=require('./routes')
app.use(express.json())
app.use(morgan('combined'))                                             
app.use('/',route)
app.listen(port,()=>{
    console.log('server is running on'+port)
})