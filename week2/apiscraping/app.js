const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here

function fetchFruits() {
    // Reset de la base de données
    db.deleteMany({}, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Base de données réinitialisée.');
      }
    });
  
    // Fetch des fruits depuis l'API et stockage dans la base de données
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => {
        // Stocker les fruits dans une variable
        const fruits = data;
  
        // Faire quelque chose avec la variable fruits
        for (let i = 0; i < fruits.length; i++) {
          const newFruit = new db(fruits[i]);
          newFruit.save();
        }
      });
  }

  fetchFruits()