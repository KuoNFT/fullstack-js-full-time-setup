const { Pokemon_V2, Type, Pokemon } = require("../database/setup.js"); // Do not edit/remove this line !

//! Create new type document/object in 'types' collection
function addType(typeName, typeColor) {
  let newType = new Type ({
    name: typeName,
    color: typeColor,
  })
  newType.save().then((data)=> console.log('New type created'))
  // Write your code here
}
 //addType('rock', 'brown')

//! Create new pokemon document/object in 'pokemons' collection
function createPokemon(pokemonName, ObjectId) {
  // Write your code here
  let newPokemon = new Pokemon({
    name: pokemonName,
    types: ObjectId,
  })
  newPokemon.save().then((data)=> console.log('New Pokemon created'))
}
 createPokemon('pikachu', '642ae0aa817c412c41bbc754') //you can get an _id from a type document in database

//! Display all pokemons from database
function displayPokemons() {
  Pokemon.findMany()
	// Write your code here
}
// displayPokemons();

//! Update a type document/object in 'types' collection
function updateType(typeName, typeColor) {}
//  Type.updateOne({name: typeName},{color: typeColor} )
  // Write your code here
//}
// updateType('rock', 'grey')

//! Delete a type document/object in 'types' collection
function deleteType(typeName) {}
  Type.deleteOne({name: typeName})
  // Write your code here
//}
// deleteType('rock')

// Do not edit/remove the code below this line !
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};
