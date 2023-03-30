const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here



function fetchFruits() {
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => {
        // Stocker les fruits dans une variable
        const fruits = data;
  
        // Faire quelque chose avec la variable fruits
        fruits.forEach(fruit => {
          const newFruit = new db({
            name: fruit.name,
            family: fruit.family,
            genus: fruit.genus,
            order: fruit.order,
            nutritions: fruit.nutritions
          });
          newFruit.save();
        });
      })
  }
  
  fetchFruits();