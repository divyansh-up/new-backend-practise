const express=require('express');
const app=express();
const db=require('./db');
 const bodyparser=require('body-parser');
 app.use(bodyparser.json());
const person=require('./models/person');

const personroutes=require('./routers/personroutes');
app.use('/person',personroutes);
 

app.listen(process.env.PORT,()=>{
    console.log("server is running");
});


