let express=require("express");
let app=express();
let cors=require("cors");
app.use(cors())

app.get("/api/data",(req,resp)=>{
  let data={msg:"message from server"}
  resp.json(data);
});
app.listen(5000)