const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name:String,
    pros:String,
    cons:String,
    rating: Number,
    timestamps:{}

})

module.exports=mongoose.model('feedback', feedbackSchema);
