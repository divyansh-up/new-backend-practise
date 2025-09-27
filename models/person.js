const mongoose=require('mongoose');
const personschema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  },
  city:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  position:{
    type: String,
    enum:['intern','manager','chef'],
    required:true,
  }
});
const person=mongoose.model('person',personschema);
module.exports=person;