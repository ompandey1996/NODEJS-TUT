let   connectdb=require("./dbconn");
  async function Update(){
    let db=await connectdb();
    let datasec=await db.updateOne({name:"tv"},{$set:{name:"ac"}})
    console.log(datasec)
  }
  Update();