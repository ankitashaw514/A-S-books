const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const abc=require('./routes/productRoutes')
const cors =require("cors")
const app = express();
//netstat -ano | findstr 5000
//taskkill /PID 6804 /F

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user',
{ useNewUrlParser: true, useUnifiedTopology: true },);

app.use(bodyParser.json());

app.use('/api/product',abc)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});