const mongoose = require('mongoose');

const citiesSchema = mongoose.Schema(
    {
        cityName : String,
        main : String,
        Description : String,
        tempMin : Number,
        tempMax : Number, 
        
    }
)


const City = mongoose.model('cities', citiesSchema)

module.exports = City
