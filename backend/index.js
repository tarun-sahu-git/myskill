const express=require('express')
const mongoose=require('mongoose')
const cors = require("cors")
const userRoutes=require('./Router/user_routes')


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/userdb')
.then(()=>{
    console.log("backend connect with mongodb database")
})

app.use('/userApi',userRoutes)

app.listen(5000,() =>{
    console.log("Server is running")
 
}

)