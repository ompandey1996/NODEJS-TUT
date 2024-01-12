
let express=require("express");
let app=express();
let bodyParser=require("body-parser");
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,resp)=>{
resp.render("input.ejs")
})
app.post("/",(req,resp)=>{
  let data=req.body.username;
   console.log(data)
})
app.listen(5000)