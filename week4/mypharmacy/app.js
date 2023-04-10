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
    const filteredDrugs = drugs.filter(drug => drug.groups.includes(groupName));
    console.log(filteredDrugs)
    const drugNames = filteredDrugs.map(drug => drug.name).sort();
    console.log(drugNames)
    return drugNames;
  }  
  
module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };