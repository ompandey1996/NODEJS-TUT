let dbconnection=require("./dbconn");
 async function insert(){
  let db =await dbconnection();
  let data =await db.insertOne({name:"microwave",brand:"onida",price:30000})
  console.log(data)
}
insert()