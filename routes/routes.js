const signupctrl=require('../controllers/signupctrl')
const express=require('express')
const router=express.Router()
router.post('/',signupctrl.signup)
router.post('/signin',signupctrl.signin)
module.exports=router