const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    MONGODB_URL:"mongodb+srv://Ankita:ankitashweta@as-books.xmzjs.mongodb.net/books?retryWrites=true&w=majority" ,
    //process.env.MONGODB_URL || "mongodb://localhost/books",
    JWT_SECRET: process.env.JWT_SECRET 
    


};

