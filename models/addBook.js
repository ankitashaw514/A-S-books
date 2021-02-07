const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addBookSchema = new Schema({
    
    name:{type:String,required:true},
    image:{type:Object,required:true},
    author:{type:String,required:true},
    edition:{type:String,required:true},
    discription: {type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,default:0,required:true},
    timestamps:{}

})

module.exports=mongoose.model('addBook', addBookSchema);
