const express = require ("express");
const mongoose = require("mongoose");
const cors= require("cors");
const UserModel = require('./models/user');
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");
app.post("/login", (req,res) =>{
    const {name,password}=req.body;
    UserModel.findOne({ name:name })
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success");
            }else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("no record exist");
        }
    })
    .catch(err => {
        // Handle any errors that occur
        console.log(err);
        res.status(500).json({ error: err.message });
    });

})
app.post('/signup', (req,res)=>{
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err=> res.json(err))

})

app.listen(3001,()=>{
    console.log("server is running");
});