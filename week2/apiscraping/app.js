const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here
// Supprimer tous les fruits de la base de données


// Do not edit/remove code above this line

// Insert your code here
db.deleteMany()
  .then(() => {
    console.log('Database reset');
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => {
        const fruits = data;
        for (let i = 0; i < fruits.length; i++) {
          const fruit = fruits[i];
          const newFruit = new db({
            name: fruit.name,
            family: fruit.family,
            genus: fruit.genus,
            order: fruit.order,
            carbohydrates: fruit.nutritions.carbohydrates,
            protein: fruit.nutritions.protein,
            fat: fruit.nutritions.fat,
            calories: fruit.nutritions.calories,
            sugar: fruit.nutritions.sugar,
            fiber: fruit.nutritions.fiber,
            vitamins: fruit.nutritions.vitamins,
            minerals: fruit.nutritions.minerals
          });
          newFruit.save()
            .then(() => {
              console.log(`Added ${newFruit.name} to database`);
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));