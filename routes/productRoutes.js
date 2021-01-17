const mongoose = require('mongoose');
const Product = require('../models/Product');
const express = require('express');



const bodyParser = require('body-parser');



const quotes = express.Router();

quotes.use(bodyParser.json());
quotes.route('/')


  .get((req, res) => {
    Product.find({})
    .then((users)=>{
      res.json(users);
    }
    )
     
  })

  .post( async (req, res) => {
    const product = await Product.create(req.body);
    return res.json(product)
  })

  /*.put(async (req, res) => {
    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  })

  .delete(async (req, res) => {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })*/

  module.exports = quotes