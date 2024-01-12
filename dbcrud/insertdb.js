let dbconnect=require("./dbconnect");
let insert=async()=>{
  let db=await dbconnect();
  let inserteddata =await db.insertOne({
     name:"nokia",model:3315,color:"GreyWhite",price:7300
  })
      console.log(inserteddata)
}
insert();