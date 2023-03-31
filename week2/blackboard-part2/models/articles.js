const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema(
    {
        name : String,
        price : Number,
        stock : Number,
        weight : Number,
        image : Image, 
        
    }
)


const Artricle = mongoose.model('articles', articlesSchema)

module.exports = Artricle
