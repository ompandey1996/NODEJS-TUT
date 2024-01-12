
let express=require("express");
let app=express();
let path=require("path")
let https=require("https");
let bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",(req,resp) =>
{

 resp.sendFile(path.join(__dirname,"weather.html"))
})
app.post("/",(req,resp)=>{
 let query =req.body.cityName;
 let key = "851038f34a71ec36c5a840dfefa20184";
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric `;
 
 https.get(url, (response) => {
   response.on("data", (data) => {
     let weatherdata = JSON.parse(data);
     let temp = weatherdata.main.temp;
     // console.log(temp);
     resp.send(`<h1>the temp of ${query} is ${temp}</h1>`)
   });
 });
 
})
app.listen(8800)    


