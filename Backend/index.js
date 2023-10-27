const express = require ('express');
const cors = require("cors")
// const mongoose = require ('mongoose');
require("./database/config");
const User = require ('./database/Users');
const Users = require('./database/Users');

const app = express();




app.use(express.json());
app.use(cors());
app.post ("/register", async (req,res)=>{
 let adduser = new User(req.body);
 let result = await adduser.save();
 result = result.toObject();
delete result.password;
 res.send(result);
 console.log("user added")
})

app.post("/login", async (req,res)=>{
    if (req.body.password && req.body.email)
{    
    let user = await Users.findOne(req.body).select("-password");
    if(user)
{ 
    res.send(user)
}else{
res.send({result:"No User found"});
} 
}else{
    res.send({result:"No data found"});
}
   
})

// const connectDB =async () =>{
//     mongoose.connect("mongodb://localhost:27017/e-comm");
//     const productSchema= new mongoose.Schema({});
//     const product= mongoose.model("products",productSchema)
//     const data = await product.find();
//     console.warn(data);
// }

// connectDB();
// // app.get("/",(req,res)=>
// {

//     res.send("app is working")
// });

app.listen(5000,()=>console.log("fdfd"))