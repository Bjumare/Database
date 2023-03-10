const express = require("express");
const app1 = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app1.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://jumarebejenia:IEBtm7PTWBoWfQqs@login.mamfb1u.mongodb.net/Login", { useNewUrlParser: true }, { useUnifiedTopology: true })

//create a data schema

const userSchema = {
    student_id: String,
    password: String
}
const Users = mongoose.model("User", userSchema);

//pract1 
/*
app1.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
*/

app1.get("/login", function(req, res) {
    res.sendFile(__dirname + "/public/login.html");
})

app1.get("/register", function(req, res) {
    res.sendFile(__dirname + "/public/register.html");
})

//app.post
app1.post("/login", function(req, res) {
    let newUser = new Users({
        student_id: req.body.student_id,
        password: req.body.password
    });
    newUser.save(); 
    res.redirect("/login");
})

app1.post("/register", function(req, res) {
    let newUser = new Users({
        student_id: req.body.student_id,
        password: req.body.password
    });
    newUser.save(); 
    res.redirect("/register");
})

app1.listen(3000, function() {
    console.log("server is running in 3000");
})

app1.use('/public',express.static('public'));