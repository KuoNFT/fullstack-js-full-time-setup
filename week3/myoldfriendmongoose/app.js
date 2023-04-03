require('./models/connections');
const Country = require('./models/countries');
const City = require('./models/cities');


// Create country with name, flag image, currency and population
function createCountry(name, flagImg, currency, population) {
    const newCountry = new Country (
        {
          name,
          flagImg,
          currency,
          population : []
        }
    )
    population.forEach((pop) => {
        const newPopulation = {
          populationNbr: pop.populationNbr,
          year: pop.year
        };
        newCountry.population.push(newPopulation);
      });

    newCountry.save().then(()=> console.log('New country created'))
 }
// Sample call:
//createCountry('Australia', 'autralia.png', 'AUD', [
//{ populationNbr: 25400000, year: new Date('2015-08-24') },
//]);


// Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) { 
    const newCity = new City (
        {
          name,
          currentPopulation,
          countryId,  
        }
        .then(data => {
            newCity.save().then(()=> console.log('New city created'))
        })
    )
}
//Sample call:
createCity('Sydney', 5312163, '642a9c0c9c2509a0e142fb47');


// Display country population from country name
function displayCountryPopulation(countryName) { }


// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) { }


module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
