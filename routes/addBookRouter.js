
const addBook= require('../models/addBook');
const multer =require('multer')
const path =require('path')

const {isAuth,checkAdmin} =require('../authenticate');
const express = require('express');



const bodyParser = require('body-parser');



const addBookRouter = express.Router();

addBookRouter.use(bodyParser.json());

const Storage =multer.diskStorage({
destination:"./client/public/uploads",
filename:(req,file,cb)=>{
  cb(null,file.filename+"_"+Date.now()+path.extname(file.originalname))
}
})

const upload=multer({storage:Storage}).single('image');
  addBookRouter.get('/',(req,res)=>{
      addBook.find({})
      .then(books=>{
        res.json(books);
      })
      .catch(err=>{
          res.status(404).send({message:"books not found"});
      })
  })

  addBookRouter.post('/',upload, (req, res) => {
    console.log(req.file);
     const book= new addBook();
     book.name=req.body.name;
     book.image='uploads/'+req.file.filename;
     book.author=req.body.author;
     book.edition=req.body.edition;
     book.discription=req.body.discription;
     book.category=req.body.category;
     book.price=req.body.price;
     console.log(book);
     book.save()
     .then(Feedback=>{
      res.json(Feedback);
     })
     .catch(err=>{
        res.json("fill data again")
     })
    
  });
  
  
addBookRouter.get("/:id",  (req, res) => {
 addBook.findOne({ _id: req.params.id })
 .then(Feedback=>{
  return res.json(Feedback);
 })
 .catch(err=>{
   return res.json("fill data again")
 })
});
addBookRouter.delete("/:id",  (req, res) => {
  addBook.findByIdAndRemove({ _id: req.params.id })
  .then(Feedback=>{
   return res.json(Feedback);
  })
  .catch(err=>{
    return res.json("fill data again")
  })
 });
 addBookRouter.delete("/",  (req, res) => {
  addBook.remove()
  .then(Feedback=>{
   return res.json(Feedback);
  })
  .catch(err=>{
    return res.json("fill data again")
  })
 });
  

  

  module.exports = addBookRouter;