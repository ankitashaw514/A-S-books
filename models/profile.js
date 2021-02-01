const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  userSchema= new Schema({
    name: String,
    email:String,
    password:String,
    number:Number
  ,
      
  isAdmin:   {
    type: Boolean,
    default: false
}
})


module.exports = mongoose.model('User', userSchema);