
const feedback = require('../models/feedback');
const {isAuth,checkAdmin} = require('../authenticate');
const express = require('express');



const bodyParser = require('body-parser');



const feedbackRouter = express.Router();

feedbackRouter.use(bodyParser.json());
feedbackRouter.route('/')


  .get(isAuth,(req, res) => {
    feedback.find({})
    .then((users)=>{
      res.json(users);
    }
    )
     
  })
  
  .post(isAuth,(req, res) => {
     const Feedback=new feedback(req.body);
     Feedback.save()
     .then(Feedback=>{
      return res.json(Feedback);
     })
     .catch(err=>{
       return res.json("fill data again")
     })
    
  })

  

  .delete((req, res) => {
    

     feedback.remove().
then((feed)=>{
  return res.status(202).send(feed);
})
.catch(err=>{
  return res.send("not deleted");
})
    

  })

  module.exports = feedbackRouter;