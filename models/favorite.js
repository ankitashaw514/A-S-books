const mongoose = require('mongoose');
const addBook=require('./addBook');
const User=require('./profile');
const Schema = mongoose.Schema;

    const favoriteSchema=new Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        books:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"addBook"
        }]
    },{
        timestamps:true
});



module.exports = mongoose.model('Favorite',favoriteSchema);