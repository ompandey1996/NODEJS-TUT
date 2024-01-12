let express=require("express");
let app=express();
     const  middleware=(req,resp,next)=>{
          if(!req.query.age){
            resp.send("please   enter age")
          }
          else if(req.query.age<18){
            resp.send(" u cant vote")

          }
          else{
            next();
          }
     }  

     //  this middleware applying  for whole page  but if we want for specific route   we need to cooment out app.use(middleware)   and use with specific route// 
    //  app.use(middleware)

       app.get("/",middleware,(req,resp)=>{
        resp.send(" u can vote")
       })  
       app.get("/con",(req,resp)=>{
        resp.send(" contact")
       })  
       app.get("/addr",(req,resp)=>{
        resp.send("address")
       })
       app.listen(5000)


