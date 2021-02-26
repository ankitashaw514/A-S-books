const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name:{ type:String,required:true},
    pros:{ type:String,required:true},
    cons:{ type:String,required:true},
    rating: { type:Number,required:true},
    

},
{timestamps:true}
)

module.exports=mongoose.model('feedback', feedbackSchema);
