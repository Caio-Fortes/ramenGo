const mongoose = require('mongoose');

const Broth = mongoose.model('broth', {
    imageInactive: String,
    ImageActive: String,
    name: String,
    description: String,
    price: Number
})

module.exports = Broth;