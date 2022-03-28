const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Menunew=new Schema({
    mname:String,  //{    type:String  },
    description:String,  //{ type:String},
    price:Number  //{ type:Number }
    
  },{
      collection:'menunew'
  });

  module.exports=mongoose.model('Menunew',Menunew);