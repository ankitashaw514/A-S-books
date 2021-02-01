
const  jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const  config = require('./config.js');
const getToken=(user)=>{
   return  jwt.sign(
    {
        _id: user._id,
        name: user.name,
        email: user.email,
        password:user.password,
        number:user.number,
        isAdmin: user.isAdmin
    },
    config.JWT_SECRET,
    {
        expiresIn: "48h"
    }
   )
}
const isAuth = (req, res, next) => {
    if((req.headers.authorization) && (req.headers.authorization.split(' ')[0]==='Bearer')){
        const token = req.headers.authorization.split(' ')[1];
        const decoded=  jwt.verify(token, config.JWT_SECRET);
            req.user = decoded;
            next();
    }
    else{
        return res.status(401).json('Unauthorize user');
    }
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
};
const checkAdmin= (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        return next()
    }
    else{
        res.status(404).send({message:"you are not a admin"})
    }
};

module.exports= {getToken, isAuth, checkAdmin};