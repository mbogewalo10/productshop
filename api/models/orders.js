const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {type:mongoose.Schema.Types.ObjectId, ref:'Product' },
    quantity: {type:Number, default:1 },
    dateCreated: {type: Date, default:Date.now}
}, {versionKey: false});

module.exports = mongoose.model('Order', orderSchema);