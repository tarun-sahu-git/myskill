const userModel=require('../model/user.js')

const createuserRecord=async(req,res)=>{
    const student =await userModel.create(req.body)
    res.send(student)
}

const fetchuserRecord=async(req,res)=>{
    const student =await userModel.find()
    res.send(student)
}

const deleteuserRecord=async(req,res)=>{
    const student=await userModel.findByIdAndDelete(req.params.id)
    res.send(student)
}

const updateuserDAta=async(req,res)=>{
    const student=await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.send(student)
}
module.exports={createuserRecord,fetchuserRecord,deleteuserRecord,updateuserDAta}