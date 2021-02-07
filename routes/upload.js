
const path =require('path')

const {isAuth} =require('../authenticate');
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary =require('cloudinary');
const { fstat } = require('fs');
const Book =require('../models/addBook');
require('dotenv').config();
const uploadRouter=express.Router();
uploadRouter.use(bodyParser.json());
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
uploadRouter.post('/addBook/upload', isAuth,(req,res)=>{
     try{  
    const file=req.files.file;
    cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'books'},(err,result)=>{
        if(err){
            return res.status(400).json({msg:"can not upload"});
        }
        removeTmp(file.tempFilePath)
        return res.status(200).json({public_id:result.public_id,url:result.secure_url})
    })
   
    }
     catch(err){
         return res.status(400).json({msg:err});
     }       
    
})
uploadRouter.post('/addBook/delete',isAuth, (req,res)=>{
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
})



const removeTmp=(path)=>{
    fs.unlink(path,err=>{
        if(err){
            throw err;
        }
    })
}
module.exports = uploadRouter;