const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName:{type: String, required:true},
    price:{type:Number, required:true},
    quantity: {type:Number, required:true},
    dateCreated: {type: Date, default:Date.now}
}, {versionKey: false});

module.exports = mongoose.model('Product', productSchema);