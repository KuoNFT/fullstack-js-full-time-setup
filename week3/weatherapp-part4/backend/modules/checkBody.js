function checkBody(body, expectedKeys) {
    const keys = Object.keys(body);
    return keys.length === expectedKeys.length && expectedKeys.every(key => keys.includes(key));
  }
  
  module.exports = { checkBody };