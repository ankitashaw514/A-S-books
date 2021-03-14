const express = require('express');
const bodyParser = require('body-parser');
const Favorites = require('../models/favorite');
const {isAuth}=require('../authenticate')
const favoriteRouter = express.Router();

favoriteRouter.use(bodyParser.json());

favoriteRouter.route('/')
.get(isAuth,(req,res,next) => {
    const id = req.headers.user;
    console.log(id);
    Favorites.findOne({user:id})
    
    .populate('books')
    .then((favorites) => {
        console.log(favorites)
        res.json(favorites.books);
    })
    .catch((err) => res.status(404).send({message:"error"}));
});

/*.delete((req, res, next) => {
    Favorites.findOneAndRemove({"user": req.user._id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));   
});*/

favoriteRouter.route('/:bookId')

.post(isAuth, (req, res, next) => {

    const id = req.headers.user;
    
    console.log(req.params.bookId)
    Favorites.findOne({user:id})
    .then((favorite) => {       
            if (favorite.books.indexOf(req.params.bookId) === -1) {
                favorite.books.push(req.params.bookId)
                favorite.save()
                .then((favorite1) => {
                  //Favorites.findOne({_id:favorite1._id})
                  //.populate('user')
                  //.populate('books')
                  //.then((favorite2) => {
                    
                     return res.json({msg: "book added"});
                      
                 /* })
                  .catch((err) => {
                    return next(err);
                })*/
              })
              .catch((err) => {
                res.status(404).send({message:"error"});
              })
            }
        })
          .catch((err) => {
                console.log(req.params.bookId);
                Favorites.create({"user":id, "books": [req.params.bookId]})
                .then((favorite) => {
                   /* console.log(favorite);
                  Favorites.findOne({_id:favorite._id})
                  .populate("user")
                  .populate("books")
                  .then((favorite1) => {*/
                    console.log(favorite)
                      return res.json({msg:"book added"});
                  })
                  .catch((err) => {
                    res.status(404).send({message:"error"});
                })
    
          })
          
    
  })

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


module.exports = favoriteRouter;