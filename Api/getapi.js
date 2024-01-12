let express = require("express");

let  dbconnect=require("../dbcrud/dbconnect");
let app=express();
 app.use(express.json())
 app.get("/", async(req,resp)=>{
   let data =await  dbconnect();
     data =await data.find().toArray();
  resp.send(data)
 })
 
 
 app.post("/",async(req,resp)=>{
      let data=await dbconnect();
       data= await data.insertOne(req.body);
       resp.send(data)
 })

 app.put("/",async(req,resp)=>{
  let data=await dbconnect();
  data= await data.updateOne({name:"oppo"},
    {$set:req.body})
 
   resp.send(data)
})
 
app.delete("/",async(req,resp)=>{
  let data=await dbconnect();
  data= await data.deleteOne({name:"lyf"})
 
   resp.send(data)
})
 
 app.listen(5000)