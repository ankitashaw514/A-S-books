const express = require('express');
const bodyParser = require('body-parser');
const Favorites = require('../models/favorite');
const Books = require('../models/addBook');
const favoriteRouter = express.Router();

favoriteRouter.use(bodyParser.json());

favoriteRouter.route('/')
.get((req,res,next) => {
    Favorites.findOne({user: req.user._id})
    .populate('user')
    .populate('books')
    .then((favorites) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(favorites);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.delete((req, res, next) => {
    Favorites.findOneAndRemove({"user": req.user._id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));   
});

favoriteRouter.route('/:dishId')

.post( (req, res, next) => {
    Favorites.findOne({user: req.user._id})
    .then((favorite) => {
        if (favorite) {            
            if (favorite.dishes.indexOf(req.params.dishId) === -1) {
                favorite.dishes.push(req.params.dishId)
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
              .catch((err) => {
                  return next(err);
              })
        }
        else {
            Favorites.create({"user": req.user._id, "books": [req.params.dishId]})
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
          .catch((err) => {
              return next(err);
          });
        }
      }
  })
})

.delete((req, res, next) => {
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
});


module.exports = favoriteRouter;