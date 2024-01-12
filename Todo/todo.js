let express=require("express");
let ejs =require("ejs");
let bodyparser=require("body-parser");
let path=require("path")
let app=express();

    //to check json content check by user
   app.use(express.json());
   //   what ever user  sent req  body bodyparser helps server to understaand    ny converting req body in user readable format//
   app.use(bodyparser.urlencoded({extended:true}));
   //set ejs//
    app.set("view engine","ejs");
    app.set("views",path.join("views"));
    let newItems=[]
   app.get("/",(req,resp)=>{
     let  today = new Date();
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
       let day =today.toLocaleDateString("en-US",options);
         console.log(day)   
       resp.render("todolist.ejs",{kindofday:day,newListItems:newItems
      })
   })  
   app.post("/",(req,resp)=>{
    let newItem=req.body.newItem;
    newItems.push(newItem)
    console.log(newItem);
      resp.redirect("/")
   })     
   app.listen(8000) 
  

