const mongoose=require('mongoose');
const mongo="mongodb://127.0.0.1:27017/golu";
mongoose.connect(mongo);
const db=mongoose.connection;
 
db.on("connected",()=>{
    console.log("mongodb is connected");
});

db.on("disconnected",()=>{
    console.log("mongo db is disconnected");
});

db.on("error",()=>{
    console.log("error in db");
});
module.exports=db;