const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");  // Destination directory
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);  // File naming
  }
});

const uploadMiddleware = multer({ storage: storage });

// FOR DYNAMIC DATA WE NEED TO SET EJS //
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware   for files
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, resp) => {
  resp.render("homepage");
});

app.post("/upload", uploadMiddleware.single("profileImage"), (req, resp) => {
  // Log request body and file information
  console.log( req.body);
  console.log(req.file);
  
  // Redirect back to the homepage
  return resp.redirect("/");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
