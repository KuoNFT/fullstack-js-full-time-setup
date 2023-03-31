const mongoose = require('mongoose');

const articlesSchema = mongoose.Schema(
    {
        name : String,
        price : Number,
        stock : Number,
        weight : Number,
        image : String, 
        
    }
)


const Article = mongoose.model('articles', articlesSchema)

module.exports = Article
