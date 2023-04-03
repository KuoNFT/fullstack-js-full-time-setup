// Insert your code here
const mongoose = require('mongoose');

const countriesPopSchema = mongoose.Schema(
    {
    populationNbr : Number,
    year : Date,
    }
)

const countriesSchema = mongoose.Schema(
    {
        name : String,
        flagImg : Buffer,
        currency : Number,
        population : countriesPopSchema,
        
        
    }
)


const Country = mongoose.model('countries', countriesSchema)

module.exports = Country
