// Insert your code here
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    discontinued : Boolean,
    mainAnimator : String,
    name : String,
    nbAnimators : Number, 

})