const mongoose = require('mongoose');

const Order = mongoose.model('order', {
    orderId: String,
    description: String,
    image: String
})

module.exports = Order;