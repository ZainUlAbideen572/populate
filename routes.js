const userctrl=require('./controllers/userctrl')
const cityctrl=require('./controllers/cityctrl')
const express=require('express')
const router=express.Router()
router.post('/city',cityctrl.create)
router.post('/user',userctrl.create)
router.post('/city/populate',cityctrl.userbycity)
module.exports=router;