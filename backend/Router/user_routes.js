const express=require('express')
const router=express.Router()
const {fetchuserRecord,createuserRecord,deleteuserRecord,updateuserDAta}=require('../Cotroller/user')

router.get('/',fetchuserRecord)
router.post('/',createuserRecord)
router.put('/:id',updateuserDAta)
router.delete('/:id',deleteuserRecord)


module.exports=router
