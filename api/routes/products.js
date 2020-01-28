const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

//Handling Incoming GET routes to retrieve all products
router.get('/', (req, res, next) => {
    Product.find()
    .select('productName price dateCreated _id request')
    .exec()
    .then(docs =>{
        console.log(docs);
        const response = {
            count: docs.length,
            products: docs.map(doc =>{
                return {
                    productName : doc.productName,
                    price: doc.price,
                    dateCreated: doc.dateCreated,
                    _id: doc._id,
                    request : {
                        type : "GET",
                        url : "http://localhost:3002/products/"+ doc._id
                    }

                }
            })
        }
        res.status(200).json({
            message: "Handling GET request to /products",
            createdProduct: response

        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
    
});

router.post('/', (req, res, next) => {
   const product = new Product({
       _id: new  mongoose.Types.ObjectId(),
       productName: req.body.productName,
       price: req.body.price,
       dateCreated: req.body.dateCreated
   });
   product
   .save()
   .then(result => {
       console.log(result);

   })
   .catch(err => {
    console.log(err)
   });

   res.status(201).json({
    message: "Handling POST route to /products",
    createdProduct: product
});
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById({_id:id})
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json({
            product: docs
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        });
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Updated'
    });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted'
    });
});
module.exports = router;