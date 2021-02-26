const mongoose = require('mongoose');
const addBook=require('./addBook');
const User=require('./profile');
const Schema = mongoose.Schema;

    const myBookSchema=new Schema({
        User:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        Books:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"addBook"
        }]
    },{
        timestamps:true
});



module.exports = mongoose.model('myBook',myBookSchema);