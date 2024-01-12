     //imprting database// 
 let dbconnect=require("../cruddbprac/dbconn")
///imported express library//
let express=require("express");
// this line  create server 
let app=express();
app.use(express.json())
//routing//
app.get("/",async(req,resp)=>{
  let data= await dbconnect();
  let result = await data.find().toArray();
  console.log(result)
  resp.send(result)
})
 app.post("/",async(req,resp) =>{
  let data=await  dbconnect();
  let result=await data.insertOne(req.body);
  resp.send(result)
  console.log(result)

 })
app.listen(5000)
