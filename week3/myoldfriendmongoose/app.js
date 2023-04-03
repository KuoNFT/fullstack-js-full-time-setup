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
          population,
        })


    newCountry.save().then(()=> console.log('New country created'))
 }
// Sample call:
//createCountry('Australia', 'autralia.png', 'AUD', [
//{ populationNbr: 25400000, year: new Date('2015-08-24') },
//]);


// Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
    const newCity = new City({
      name,
      currentPopulation,
      country : countryId,
    });
    newCity.save().then(()=> console.log('city created'))
  }
  
  // Sample call:
 // createCity('Sydney', 5312163, '642a9c0c9c2509a0e142fb47');

// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) {
    City.findOne({ name: cityName })
        .populate('country')
        .then((city) => {
            if (city && city.countryId) {
                console.log(`City: ${cityName}`);
                console.log(`Country: ${city.countryId.name}`);
                console.log(`Flag: ${city.countryId.flagImg}`);
                console.log(`Currency: ${city.countryId.currency}`);
                console.log(`Population: ${city.countryId.population[0].populationNbr}`);
            } else {
                console.log(`City ${cityName} not found`);
            }
        })
        .catch((err) => console.log('Error finding city:', err));
}

// Display country population from country name
function displayCountryPopulation(countryName) {
    Country.findOne({ name: countryName })
        .then((country) => {
            if (country) {
                console.log(`Population of ${countryName}: ${country.population[0].populationNbr}`);
            } else {
                console.log(`Country ${countryName} not found`);
            }
        })
        .catch((err) => console.log('Error finding country:', err));
}


 module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line















