const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        result: Boolean,

        gameId: String,
      
        wordLength: Number,
      
        word: String,

        
    }
)


const Game = mongoose.model('games', gameSchema)

module.exports = Game
