const express=require('express')
const router=express.Router()
const {fetchuserRecord,createuserRecord}=require('../Cotroller/user')

router.get('/',fetchuserRecord)
router.post('/',createuserRecord)

module.exports=router
