const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here

function fetchFruits() {
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => {
        // Supprimer les fruits existants de la collection
        db.collection.deleteMany({}, () => {
          // Ajouter les fruits récupérés à partir de l'API à la collection
          db.collection.insertMany(data, (error, result) => {
            if (error) {
              console.error(error);
            } else {
              console.log(`${result.insertedCount} nouveaux fruits ont été ajoutés à la collection.`);
            }
          });
        });
      })
      .catch(error => console.error(error));
  }
  
  fetchFruits();

  
  
  
  
  
  