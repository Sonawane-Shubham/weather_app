const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

// public static path
// app.set("views", path.join(__dirname, "../views"));
const staticpath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
//to access static page from public index.html
//work in top to bottoom manner and connection close
app.set('view engine','hbs');

app.set('views',template_path);
app.use(express.static(staticpath));


hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    //res.send("hello this is wheather app");
    res.render('index');
})
 
app.get("/about",(req,res)=>{
    // res.send("hello this is about us ka page");
    //how to use .hbs file
    res.render('about')
})
app.get("/wheather",(req,res)=>{
    // res.send("hello this is wheather ka page");
    res.render('wheather');
})
app.get("*",(req,res)=>{
    // res.send("Oppa error 404 page not found");
    res.render('404error')
})
 
app.listen(port,()=>{
    console.log(`listining to the  port at ${port}`)
});