let dbconnect=require("./dbconnect")
const main=async()=>{
  let data =await dbconnect();
   data=await data.find({}).toArray();
   console.log(data)

  }
  main();