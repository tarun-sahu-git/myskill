const userModel=require('../model/user.js')

const createuserRecord=async(req,res)=>{
    const student =await userModel.create(req.body)
    res.send(student)
}

const fetchuserRecord=async(req,res)=>{
    const student =await userModel.find()
    res.send(student)
}
module.exports={createuserRecord,fetchuserRecord}