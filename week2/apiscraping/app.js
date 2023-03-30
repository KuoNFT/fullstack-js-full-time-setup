const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here
//https://fruityvice.com/api/fruit/all 
//On veut fetch tous les fruits disponibles sur l'api fuityvice et la renvoyer dans notre database 
const newUser = new db({
    firstName: 'Jane',
    lastName: 'Doe',
   });
   
   newUser.save().then(() => {
    
    db.find().then(data => {
      console.log(data);
    });
   
   });

   newUser()