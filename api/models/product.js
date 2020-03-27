const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productname:{type: String, required:true},
    price:{type:Number, required:true},
    quantity: {type:Number, default:1},
    dateCreated: {type: Date, default:Date.now},
    productimage: {type: String, required:true},
    description: {type:String, required: true}
}, {versionKey: false});

module.exports = mongoose.model('Product', productSchema);