const express=require('express')
const multer=require('multer')
const router=express.Router();
const finalctrl=require('../controllers/finalctrl')
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        const prefix=Date.now()+Math.round(Math.random()*1E9)
        const filename=prefix+'-'+file.originalname
        cb(null,filename)
        req.body.image=filename
    }
})
const uploads=multer({
       storage:storage,
       filefilter:function(req,file,cb){
        console.log(file.mimetype)
       cb(null,true)
       }
})
router.get('/page/:page/limit/:limit',finalctrl.get)
router.post('/',uploads.single('image'),finalctrl.post)
router.delete('/:id',finalctrl.remove)
router.put('/:id',finalctrl.update)
router.patch('/:id',finalctrl.partial)
router.post('/reviews',finalctrl.newReview)
router.get('/:id',finalctrl.getbyid)
module.exports=router;