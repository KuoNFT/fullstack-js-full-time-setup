// Insert your code here
// Insert your code here
const mongoose = require('mongoose')

const newRadioSongSchema = mongoose.Schema({
    annoying : Boolean,
    artist : String,
    creationDate : Date,
    title : String, 

})

// Insert your code here

const Songs = mongoose.model("songs", newRadioSongSchema)

module.exports = Songs;