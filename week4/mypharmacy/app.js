// Insert your code here
const drugs = require('./data');

function getDrugDescriptionByName(name) {
    const drug = drugs.find(drug => drug.name === name);
    return drug.description;
  }
  
  function getDrugTypeByName(name) {
    const drug = drugs.find(drug => drug.name === name);
    return drug.type;
  }
  
  function getDrugNamesByGroup(groupName) {
    return drugs.filter(drug => drug.groups.includes(groupName))
        .map(drug => drug.name);
}

  
module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };