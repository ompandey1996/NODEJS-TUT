let  dbconnect=require("./dbconnect");
       const Delete= async ()=>{
           let db=await dbconnect();
           let deleteone=await db.deleteOne({name:"onida"})
          console.log(deleteone)
       }
       Delete();