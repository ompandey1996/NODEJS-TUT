// FOR SERVER FACILITY WE NNED TO IMPORT EXPRESS LIBRARY//
//  WE SEND MAIL THROUGH SMTP   PROTOCOL
  let express=require("express");
  let sendemail=require("./controller/sendemail")
  let app=express();
  app.get("/",(req,resp)=>{
    resp.send("hello")
  })
  app.get("/mail",sendemail)
      const start=async()=>{
try{
  app.listen(5000,()=>{
    console.log("server started")
  })
}
catch(err){
   console.log(err)
}
      }
      start();
