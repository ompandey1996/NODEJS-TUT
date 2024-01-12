let  dbconnect=require("./dbconn");
async function deleterecord(){
   let db =await dbconnect();
   let result= await db.deleteOne({name:"ac",brand:"lg",price:13000})
   console.log(result)
}
deleterecord()