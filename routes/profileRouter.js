const express = require('express');


const bodyParser = require('body-parser');
const User = require('../models/profile');
const  {getToken} = require('../authenticate');


const router = express.Router();

router.use(bodyParser.json());


/* GET users listing. */
router.get('/',(req,res)=>{
  User.find({})
  .then(books=>{
    res.json(books);
  })
  .catch(err=>{
      res.status(404).send({message:"books not found"});
  })
})
router.post('/register', (req, res) => {
 const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
   user.password = req.body.password;
   user.number = req.body.number;
console.log(user);
 user.save((err,docs)=>{
   if(err){
    res.status(401).send({ message: "Invalid Userdata." });
    res.end();
   }
   else{
   const  token= getToken({id:docs._id})
   res.cookie('token',token,{
    httpOnly:true,
    path:'/profile/token'
   })
        
   res.send({
      _id:docs.id,
        name: docs.name,
        email:docs.email,
        number:docs.number,
        isAdmin: docs.isAdmin,
        token:token

   })    
     token:(req,res)=>{
       try{
       const rf_token=req.cookies.token;
       if(!rf_token) return res.status(400).json({msg:"please login or register"})
       else{
       return  res.json({rf_token});
       }
        
       }
       catch(err){
         return res.status(500).json({msg:err.message})
       }
       
     }   
  
    
   }
 })
})

router.post('/login',(req,res)=>{
    
    User.findOne({
      email:req.body.email,
      password:req.body.password
    })
    .then((loginUser)=>{
      console.log(loginUser)
      const  token= getToken({id:loginUser._id})
   res.cookie('token',token,{
    httpOnly:true,
    path:'/profile/token'
   })
      return res.send({
        _id:loginUser._id,
          name:loginUser.name,
          email:loginUser.email,
          
          number:loginUser.number,
          isAdmin:loginUser.isAdmin,
          token:token
      })
    })
      
          
       

      .catch((error)=>{
        return res.status(404).send({message:"Go and register"})
      
      })
        

  
})
router.get("/createadmin", async (req, res) => {
  try {
      const user = new User({
          name: "ankita",
          email: "ankita@gmail.com",
          password: "1234",
          isAdmin: true
      });
      const newUser = await user.save();
      return res.json(newUser);
  } catch (error) {
      return res.json({ message: error.message });
  }
});

router.delete('/',(req,res)=>{
  User.remove()
  .then(books=>{
    res.json(books);
  })
  .catch(err=>{
      res.status(404).send({message:"books not found"});
  })
})
router.get('/logout',(req,res)=>{
try{
  res.clearCookie('token',{path:'/profile/token'})
  return res.json({msg:"loged Out"})

}
catch (error) {
  return res.json({ message: error.message });
}
})






 
module.exports= router;
