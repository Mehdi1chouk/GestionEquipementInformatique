const express = require('express');
const mongoose = require('mongoose');
const app = express();
const laptopExpressRoute = express.Router();
let laptopSchema = require('../models/laptops');


//get all products
laptopExpressRoute.route('/').get((req, res) => {
    laptopSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

//get product by id
laptopExpressRoute.route('/product/:id').get((req, res) => {
    laptopSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

//add product

laptopExpressRoute.route('/addproduct').post((req, res, next) => {
    laptopSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})


//delete product
laptopExpressRoute.route('/del-product/:id').delete((req, res) => {
        laptopSchema.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    })
    //update product
laptopExpressRoute.route('/update-product/:id').put((req, res) => {
    laptopSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('update successful')
        }
    })
})






module.exports = laptopExpressRoute;