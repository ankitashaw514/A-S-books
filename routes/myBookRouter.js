const express = require('express');
const bodyParser = require('body-parser');
const myBook = require('../models/myBook');
const {isAuth}=require('../authenticate')
const myBookRouter = express.Router();

myBookRouter.use(bodyParser.json());
myBookRouter.route('/')
.get(isAuth,(req,res,next) => {
    const id = req.headers.user;
    console.log(id);
myBook.findOne({User:id})
    
    .populate('Books')
    .then((favorites) => {
        console.log(favorites)
        res.json(favorites.Books);
    }, (err) => next(err))
    .catch((err) => next(err));
})

/*.delete(isAuth,(req, res, next) => {
    .findOneAndRemove({"user": req.headers.user,})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));   
});*/




/*.delete((req, res, next) => {
    Favorites.findOne({user: req.user._id})
    .then((favorite) => {
        if (favorite) {            
            index = favorite.dishes.indexOf(req.params.dishId);
            if (index >= 0) {
                favorite.dishes.splice(index, 1);
                favorite.save()
                .then((favorite) => {
                  Favorites.findById(favorite._id)
                  .populate('user')
                  .populate('books')
                  .then((favorite) => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json(favorite);
                  })
              })
            }
            else {
                err = new Error('Book ' + req.params.dishId + ' not found');
                err.status = 404;
                return next(err);
            }
        }
        else {
            err = new Error('Favorites not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});*/


module.exports = myBookRouter;