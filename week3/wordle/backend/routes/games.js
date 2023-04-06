var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const Game = require('../models/games')


const words = [
    'Bingo', 'Voiture','Perroquet',
    'Boomerang','Photographie',
    'Chargeur','Ordinateur',
    'Télévision','Chêne','Caisse'
]

router.get("/new", async (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Sélectionne un mot aléatoire et le met en majuscule
    const newGame = new Game({ // Crée un nouvel objet Game avec les informations nécessaires
      result: false,
      gameId: new mongoose.Types.ObjectId(), // Génère un nouvel ID de jeu
      wordLength: randomWord.length,
      word: randomWord,
      createdAt: new Date(),
    });
    const savedGame = await newGame.save(); // Enregistre le jeu dans la base de données
    res.json({
      word: savedGame.word,
      result: savedGame.result,
      gameId: savedGame.gameId,
      wordLength: savedGame.wordLength,
    });
  });
  



module.exports = router;


















module.exports = router;