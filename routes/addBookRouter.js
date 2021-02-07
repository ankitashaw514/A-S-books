


const addBook= require('../models/addBook');

const {isAuth,checkAdmin} =require('../authenticate');
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary =require('cloudinary');
const { fstat } = require('fs');
require('dotenv').config();



const addBookRouter = express.Router();

addBookRouter.use(bodyParser.json());

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
})


/*uploadRouter.post('/delete',isAuth, (req,res)=>{
 try{
 const {public_id}=req.body;
 cloudinary.v2.uploader.destroy(public_id,async (err,result)=>{
     if(err){
         throw err;
     }
     res.json({msg:"imsge is deleted"})
 })
 }
 catch(err){
     return res.status(400).json({msg:err});
 }  
})*/



/*const removeTmp=(path)=>{
 fs.unlink(path,err=>{
     if(err){
         throw err;
     }
 })
}*/

  addBookRouter.get('/',(req,res)=>{
      addBook.find({})
      .then(books=>{
      
        res.json(books);
      })
      .catch(err=>{
          res.status(404).send({message:"books not found"});
      })
  })

  addBookRouter.post('/',isAuth, (req, res) => {
    try{  
      const file=req.files.file;
      console.log(file);
      cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'books'},(err,result)=>{
        if(err){
          throw err;
        }
        //removeTmp(file.tempFilePath)
        const book= new addBook();
     book.name=req.body.name;
     book.image={
       public_id:result.public_id,
       url:result.secure_url
     },
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


      })
      
        
   
    }
      catch(err){
        return res.status(400).json({msg:err});
      } 
    
  })
 
  
  
addBookRouter.get("/:id",(req, res) => {
  
 addBook.findOne({ _id: req.params.id })
 .then(Feedback=>{
  return res.json(Feedback);
 })
 .catch(err=>{
   return res.json("fill data again")
 })
});
addBookRouter.delete("/:id", isAuth, (req, res) => {
  addBook.findByIdAndRemove({ _id: req.params.id })
  .then(Feedback=>{
   return res.json(Feedback);
  })
  .catch(err=>{
    return res.json("fill data again")
  })
 });
 addBookRouter.delete("/", isAuth,checkAdmin, (req, res) => {
  addBook.remove()
  .then(Feedback=>{
   return res.json(Feedback);
  })
  .catch(err=>{
    return res.json("fill data again")
  })
 });
  

  

  module.exports = addBookRouter;