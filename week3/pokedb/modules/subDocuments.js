const { Pokemon } = require("../database/setup"); // Do not edit/remove this line !

//! Display pokemons from database
function displayPokemons() {
  Pokemon.find().then(data => {
    console.log("ALL POKEMONS =>", data);
  });
}
displayPokemons();

//! Create a new pokemon in database
function createPokemon(pokemonName, typeName, typeColor) {
  // Write your code here
}
// createPokemon('pikachu', 'electric', 'yellow')

//! Add a sub-document/sub-object to an array
function addType(pokemonName, typeName, typeColor) {
  // Write your code here
  Pokemon.updateOne({name: pokemonName}, {$push: {types: typeName, color: typeColor}})
  .then((data) => console.log(data) )
}
// addType('pikachu', 'rock', 'brown')

//! Update type in "pokemon" collection
function updateType(typeName, typeColor) {
  Pokemon.updateMany({types: {$elemMatch: {name: typeName}}}, {$set: {'types.$.color': typeColor}})
  .then((data) => console.log(data))
  }
  // Write your code here

// updateType('rock', 'grey')

//! Delete type from "pokemon" collection
function deleteType(typeName) {
  // Write your code here
  Pokemon.updateMany({types: {$elemMatch: {name: typeName}}}, {$pull: {types: {name: typeName}}})
  .then((data)=> console.log(data))
}
// deleteType('rock')

// Do not edit/remove the code below this line !
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};
