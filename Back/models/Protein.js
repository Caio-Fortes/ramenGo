const mongoose = require('mongoose');

const Protein = mongoose.model('protein', {
    id: String,
    imageInactive: String,
    ImageActive: String,
    name: String,
    description: String,
    price: Number
})

module.exports = Protein;