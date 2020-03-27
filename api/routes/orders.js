const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/orders')
const Product = require('../models/product')

router.get('/', (req, res, next) => {
    Order.find()
    .select("product quantity _id dateCreated")
    .populate('product')
    .exec()
    .then( docs => {
        console.log(docs)
        res.status(200).json({
            count: docs.length,
            orders: docs.map(doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    dataCreated: doc.dataCreated,
                    request:{
                        type: "GET",
                        url: "http://localhost:3002/orders/" + doc._id
                    }
   
                }

            })
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
    })
});

router.post('/', (req, res, next) => {
Product.findById(req.body.productId)
.then( product => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        product: req.body.productId,
        quantity: req.body.quantity,
        dateCreated: req.body.dataCreated
    });
    order
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: "Order Created",
            orderCreated:{
                _id: result._id,
                product: result.product,
                quantity:result.quantity
            },
            request:{
                type: "GET",
                url: "http://localhost:3002/orders" + result._id
            }
        })
    })
    .catch( err =>{
     console.log(err);
     res.status(500).json({
         error: err
     })
    })
})
.catch(err =>{
    console.log(err);
    res.status(500).json({
        message: err
    })
})

   const order = new Order({
       _id: new mongoose.Types.ObjectId(),
       product: req.body.productId,
       quantity: req.body.quantity,
       dateCreated: req.body.dataCreated
   });
   order
   .save()
   .then(result =>{
       console.log(result);
       res.status(201).json({
           message: "Order Created",
           orderCreated:{
               _id: result._id,
               product: result.product,
               quantity:result.quantity
           },
           request:{
               type: "GET",
               url: "http://localhost:3002/orders" + result._id
           }
       })
   })
   .catch( err =>{
    console.log(err);
    res.status(500).json({
        error: err
    })
   })
});

router.get('/:orderId', (req, res, next) => {
    Order.findById({_id: req.params.orderId})
    .populate('product')
    .exec()
    .then(result =>{
        res.status(200).json(result)
    })
   .catch( err =>{
    res.status(200).json({
        error:err
    })
})
});

router.delete('/:orderId', (req, res, next) => {
    Order.remove({_id: req.params.orderId})
    .exec()
    .then( result =>{
        console.log("You have successfully removed orderId");
        res.status(200).json({
            Message: " You have successfully removed orderiId"
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(200).json({
            error:err
        })
    })
});

module.exports = router;