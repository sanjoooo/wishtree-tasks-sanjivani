const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let User=new Schema({
    userName:String,
    email:String,  //{    type:String  },
    password:String,
    confirmPassword:String,  //{ type:String},
    adminfound:Boolean  //{ type:Boolean }
    
  },{
      collection:'user'
  });


  //exporting my model 
module.exports=mongoose.model('User',User);