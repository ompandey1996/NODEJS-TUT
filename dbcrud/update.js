let dbconnect=require("./dbconnect")

const update= async()=>{
  let db=await dbconnect();
  let updateone=await db.updateOne({name:"nokia"},{$set:{name:"onida"}})
  console.log(updateone)
}
update()