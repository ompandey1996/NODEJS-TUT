let express = require("express");
let app = express();
let path = require("path");
let qrcode=require("qrcode")

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set the view engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, resp) => {
  resp.render("index");
});
app.post("/scan",(req,resp)=>{
  let inputtext=req.body.inputtext;
   console.log(inputtext);
   qrcode.toDataURL(inputtext,(err,src)=>{
    resp.render("scan",{

      qr_code:src,
    })
   })
   //   we need to pass inputtext to qr so that it give qr code relevent to that and later send it as resp //
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
