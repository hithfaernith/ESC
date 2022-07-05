//run this file to launch
//connect on port 3000
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("listening on 3000");
});

app.use(express.static(__dirname+"/html"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/html/about.html")
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/html/contact.html")
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/html/error.html')
})