const express=require('express');
const router=express.Router();
const person=require('../models/person');
const { runInContext, update } = require('lodash');
router.get('/',async(req,res)=>{
    try{
    const data=await person.find();
    res.status(200).json(data);
    }

    catch(error){
        res.status(500).json({error:"internal error"});
    }
 });
 


router.post('/',async(req,res)=>{
try{
    const data=req.body;
    const pdata=new person(data);
    const response=await pdata.save();
    res.status(200).json(response);



}
catch(error){

    res.status(500).json({error:"internal error"});
}

});

router.get('/:work',async(req,res)=>{
     try{
        const worktype=req.params.work;

        if(worktype!=='intern' && worktype!=='manager' && worktype!=='chef'){
            return res.status(400).json({error:"invalid work type"});
        }
        const yes=await person.find({position:worktype});
        if(!yes){
            res.status(401).json({error:"no data found"});
        }
        res.status(200).json(yes);
     }
     catch(error){
        res.status(500).json({error:"internal error"});
     }
});
router.put('/:id',async(req,res)=>{
    try{
        const updatedData=req.body;
        const upid=req.params.id;

        const data=await person.findByIdAndUpdate(upid,updatedData,{new:true});
        if(!data){
            res.status(404).json({error:"no data found"});
        }

        res.status(200).json(data);
    }
    catch(error){

        res.status(500).json({error:"internal error"});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const upid=req.params.id;
        const data=await person.findByIdAndDelete(upid);
       if(!data){
        res.status(404).json({error:"no data found"});      

       }
       res.status(200).json(data);



    }

    catch(error){
        res.status(500).json({error:"internal error"});
    }
});

module.exports=router;