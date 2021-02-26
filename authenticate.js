
const  jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const  config = require('./config.js');
const getToken=(user)=>{
   return  jwt.sign(
    
        
        //_id: user._id,
        /*name: user.name,
        email: user.email,
        password:user.password,
        number:user.number,
        isAdmin: user.isAdmin*/
        user
    ,
    config.JWT_SECRET,
    {
        expiresIn: "48h"
    }
   )
}
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        const onlyToken = token.slice(7, token.length);
        //console.log(token)
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({ msg: "Invalid Token" });
            }
            req.user = decode;
            next();
            return;
        });
        0;
    } else {
        return res.status(401).send({ msg: "Token is not supplied." });
    }
};
/*const isAuth = (req, res, next) => {
    try{
        //const token = req.header("Authorization")
        const token = req.header['Authorization'];
        if(!token) return res.status(400).json({msg:"invalid Authentication"})
        jwt.verify(token,config.JWT_SECRET,(err,user)=>{
            if(err){
                return res.status(400).json({msg:"invalid Authentication"}) 
            }
            req.user=user;
            next()
        })
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}*/
    
    /*    const token = req.headers['authorization'];
        if(token){
        
            req.user = token;
            next()
        }
    else{
        return res.status(401).json('Unauthorize user');
    }*/
    //const {token} = req.headers.authorization;
    //if (!token) {
        //return res.status(401).json('Unauthorize user');
   // }
    //try{
    
        //const onlyToken = token.slice(7, token.length);

      //const decoded=  jwt.verify(token, config.JWT_SECRET);
            //req.user = decoded;
            //next();
    //}
     //catch(e){
       // res.status(401).json({ msg: "Token is not valid." });
    //}

const checkAdmin= (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        return next()
    }
    else{
        res.status(404).send({message:"you are not a admin"})
    }
};

module.exports= {getToken, isAuth, checkAdmin};