const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here
// Supprimer toutes les entrées dans la base de données
db.deleteMany()
  .then(() => {
    // Fetch des fruits depuis l'API et stockage dans la base de données
    fetch('https://fruityvice.com/api/fruit/all')
      .then(response => response.json())
      .then(data => {
        // Stocker les fruits dans une variable
        const fruits = data;

        // Créer un tableau pour stocker les fruits à insérer
        const fruitsToInsert = [];

        // Pour chaque fruit dans la liste, créer une nouvelle instance de Fruit
        fruits.forEach(fruit => {
          const newFruit = new db({
            name: fruit.name,
            family: fruit.family,
            genus: fruit.genus,
            order: fruit.order,
            nutritions: fruit.nutritions,
            id: fruit.id // Ajouter la propriété "id" manquante
          });
          fruitsToInsert.push(newFruit);
        });

        // Insérer tous les fruits dans la base de données en une seule fois
        db.insertMany(fruitsToInsert)
          .then(() => console.log('La base de données a été mise à jour avec succès !'))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
 

