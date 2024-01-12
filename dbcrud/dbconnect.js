   
//code for  connecting database
 
 // HERE WE IMPORTED NODEJS DRIVER MONGOCLIENT   PURPOSE OF THIS DRIVER TO  ESTABLISH COLLECTION BETWEEN NODE AND MONGO DB//
 let {MongoClient}=require("mongodb")
  //  URL OF DATABASE 
 const url= 'mongodb://localhost:27017';
  // NOW GIVING ACCESS OF URL TO  CLIENT SO THAT IT CONNECTS  NODE AND MONGOSE URL//
  let client= new MongoClient(url);
      //  function dbconnect//
           async  function dbconnect(){
      let result= await client.connect();
      let db= result.db("products");
        return  db.collection("electronics");
      // let data = await collection .find({}).toArray();
      //     console.log(data)
          }
         module.exports=dbconnect;