  const express=require("express");
  const app=express();
  const jwt=require("jsonwebtoken");
  const  secretkey="secretkey"
  app.get("/home",(req,resp)=>{
    resp.send("meri maa")
  } )
app.post("/login",(req,resp)=>{
    let data={
      id:1,
      name:"hajmola",
      gender:"male"
    }
    //it is use to make a token(a piece of information )genertared by server based on user information
      jwt.sign( {data},secretkey,{expiresIn:"300s"},(err,token)=>     
      {
        resp.json(token);
        console.log(`this is ${token}`)
      })
})
      
app.post("/profile",verifyToken,(req,resp)=>   
{
      jwt.verify(req.token,secretkey,(err,authdata)=>  {
        if(err){
          resp.send({result:"invalid"})
        }
        else{
          resp.json({message:"profile accesses"},authdata)
        }
      })
})
         //middleware//
        function verifyToken(req,resp,next){
            let backbearer=req.headers["Authorization"]
      if(typeof backbearer!=='undefined'){
         const bearer=backbearer.split(" ");
         const token=bearer[1];
         req.token=token;
         next()
      }
      else{
        resp.send("token not valid")
      }

      }
  app.listen(3000);

