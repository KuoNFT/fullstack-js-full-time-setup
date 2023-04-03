// Insert your code here
const mongoose = require('mongoose');

const citiesSchema = mongoose.Schema(
    {
        name : String,
        flagImg : Buffer,
        currency : Number,
        population : Number,
        
        
    }
)


const City = mongoose.model('cities', citiesSchema)

module.exports = City

