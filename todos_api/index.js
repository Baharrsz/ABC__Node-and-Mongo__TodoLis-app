const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");

const router = require("./routes/todos_routes.js");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/todos", router);

app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/public"));


app.get("/", (req,res) => {
    res.sendFile("index.html");
});

    
app.listen(port, function(){
    console.log("app is running on " + port);
})