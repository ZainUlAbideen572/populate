const loginctrl=require('../controllers/loginctrl')
const express=require('express')
const router=express.Router()
router.post('/',loginctrl.post)
router.post('/signin',loginctrl.signin)
module.exports=router;