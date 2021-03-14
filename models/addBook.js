const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addBookSchema = new Schema({
    
    name:{type:String,required:true},
    image:{
        type:Object,
        url:{type:String,required:true},
        public_id:{type:String,required:true},
        required:true
    },
    author:{type:String,required:true},
    edition:{type:String,required:true},
    discription: {type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,default:0,required:true},
    

},
{timestamps:true}
)

module.exports= mongoose.model('addBook', addBookSchema);
