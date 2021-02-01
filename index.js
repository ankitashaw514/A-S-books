const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const feedback=require('./routes/feedbackRouter')
const router=require('./routes/profileRouter')
const addBook =require('./routes/addBookRouter')
const path = require('path');



const cors =require("cors");
const favorite= require('./routes/favoriteRouter');
const { MONGODB_URL } = require('./config');
require('dotenv').config();

const app = express();
//netstat -ano | findstr 5000
//taskkill /PID 6804 /F

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URL,
{ useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true},);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profile',router);
app.use('/feedback',feedback);
app.use('/addBook',addBook);
app.use('/favorite',favorite);



if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

 
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});