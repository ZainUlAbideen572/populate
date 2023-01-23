const pmctrl=require('../controllers/pmctrl')
const express=require('express')
const router=express.Router()
router.get('/',pmctrl.get)
router.post('/',pmctrl.post)
module.exports=router