let {MongoClient}=require("mongodb");
let url='mongodb://localhost:27017';

let client=  new MongoClient(url);
async function dbconn(){
  let result=await client.connect();
  let db=result.db("home");
  let collection =db.collection("homethings")
  return collection;
}
 module.exports=dbconn;
