


const addBook= require('../models/addBook');

const {isAuth,checkAdmin} =require('../authenticate');
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary =require('cloudinary');
const { fstat } = require('fs');
const myBook = require('../models/myBook');
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
      url:result.secure_url,
       public_id:result.public_id
       
     };
     book.author=req.body.author;
     book.edition=req.body.edition;
     book.discription=req.body.discription;
     book.category=req.body.category;
     book.price=req.body.price;
     console.log(book);
     book.save()
          .then(Feedback=>{

            
    
              const id = req.headers.user;
              myBook.findOne({User:id})
              .then((favorite) => {       
                      if (favorite.Books.indexOf(Feedback._id) === -1) {
                          favorite.Books.push(Feedback._id)
                          favorite.save()
                          .then((favorite1) => {
                            //Favorites.findOne({_id:favorite1._id})
                            //.populate('user')
                            //.populate('books')
                            //.then((favorite2) => {
                          res.status(200).json({msg:"all okey"})
                                
                           /* })
                            .catch((err) => {
                              return next(err);
                          })*/
                        })
                        .catch((err) => {
                            return next(err);
                        })
                      }
                  })
                    .catch((err) => {
                      
                          myBook.create({"User":id, "Books": [Feedback._id]})
                          .then((favorite) => {
                             /* console.log(favorite);
                            Favorites.findOne({_id:favorite._id})
                            .populate("user")
                            .populate("books")
                            .then((favorite1) => {*/
                              console.log(favorite)
                                return res.json(favorite);
                            })
                            .catch((err) => {
                              return next(err);
                          })
              
                    })
                    
              
            })
      })
          .catch(err=>{
              res.json("fill data again")
          })
      
    }
      catch(err){
        return res.status(400).json({msg:err});
      } 
    
  })
 
  
  
addBookRouter.get("/:id",(req, res) => {
  
 addBook.findById( req.params.id )
 .then(Feedback=>{
    return res.json(Feedback);
 })
 .catch(err=>{
   return res.json("fill data again")
 })
});
addBookRouter.delete("/:id", isAuth, (req, res) => {
  addBook.findByIdAndRemove( req.params.id )
  .then(Feedback=>{
    myBook.findOne({User:req.headers.user})
    .then((favorite) => {       
          const index=favorite.Books.indexOf(Feedback._id);
          favorite.Books.splice(index,1);
                favorite.save()
                .then((favorite1) => {
                  //Favorites.findOne({_id:favorite1._id})
                  //.populate('user')
                  //.populate('books')
                  //.then((favorite2) => {
                res.status(200).json({msg:"all okey"})
                      
                 /* })
                  .catch((err) => {
                    return next(err);
                })*/
              })
          
              .catch((err) => {
                  return next(err);
              })
            })

            .catch((err) => {
              return next(err);
          })
              
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