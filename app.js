const express = require("express");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){

    res.render("index");

});


app.get("/cars",function(req,res){
    res.render("cars");
});

app.get("/contact",function(req,res){
    res.render("signup");
});

app.listen(3000,()=>{

    console.log("server Runnig on port 3000");

});