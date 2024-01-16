const mongoose =require('mongoose')

const userShema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'you must provide name']
},
email:{
    type:String,
    required:[true,'you must provide email']
},
password:{
    type:String,
    required:[true,'you must provide password']
},


})


module.exports=mongoose.model('User',userShema)