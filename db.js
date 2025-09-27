const mongoose=require('mongoose');
const mongo=process.env.MONGO_URI;
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