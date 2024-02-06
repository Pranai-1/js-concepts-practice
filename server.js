const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const port=4000
app.use(express.json())
app.get("/",(req,res)=>{
    let obj={name:"pranai"}
    res.status(200).json({obj,message:"Successful"})
})

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))
