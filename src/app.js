 
const express = require("express");
const path = require("path");
const hbs = require("hbs");
 
 
 
const app = express();
  
const port = process.env.PORT || 8000;

 
 
 
 

const static_path = path.join(__dirname, "../public");
const template = path.join(__dirname, "../templates/views");
const partial = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template );
hbs.registerPartials(partial);


//get
app.get("/", (req, res) => {
    res.render("index");
})

  


app.listen(port, () => {
    console.log(`connection successfull at port no. ${port}`);
})