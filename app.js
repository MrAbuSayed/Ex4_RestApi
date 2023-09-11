const exprees=require("express");
const router = require("./router/rest.router");
const bodyParser = require('body-parser');
const app= exprees();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    
    res.send(`<h1>Welcome to our REST Api SERVER</h1>`);
});

app.use(router);

app.get("/addUser",(req,res)=>{
    res.sendFile(__dirname+"/view/rest.add.html");
});


module.exports=app;