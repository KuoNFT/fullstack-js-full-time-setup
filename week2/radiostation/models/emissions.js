// Insert your code here
const mongoose = require('mongoose')

const newEmissionSchema = mongoose.Schema({
    discontinued : Boolean,
    mainAnimator : String,
    name : String,
    nbAnimators : Number, 

})

const Emissions = mongose.model("emissions", newEmissionSchema)
