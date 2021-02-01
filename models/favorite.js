var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    const favoriteSchema=new Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        books:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }]
    },{
        timestamps:true
});



module.exports = mongoose.model('Favorite',favoriteSchema);