const mongoose = require('mongoose');

const citySchema = mongoose.Schema(
    {
        cityName : String,
        main : String,
        Description : String,
        tempMin : Number,
        tempMax : Number, 
        
    }
)


const City = mongoose.model('cities', citySchema)

module.exports = City
