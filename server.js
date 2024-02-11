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
const recommendations=["len","lenovo","lenovo bags","lenovo phones","lenovo mobiles"]
app.post("/recommend",(req,res)=>{
    let {data}=req.body
   
    let arr=[]
    if(data.length>0){
   recommendations.map((x)=>{
        if(x.startsWith(data))
        arr.push(x)
    })
}
    res.status(200).json({message:"success",arr})
})

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))

