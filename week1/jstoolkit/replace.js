function replaceWord(str, oldWord, newWord) {
  // Insert your code here
   const newPhrase = str.replace(oldWord, newWord)
  return newPhrase
}

function hideWord(str, word) {
  // Insert your code here
  const secret = str.replace(word,'******' )
}

console.log(replaceWord('I hate JavaScript!', 'hate', 'love'));
// Expected: I love JavaScript!

console.log(hideWord('My password is qwerty', 'qwerty'));
// Expected: My password is ******


// Do not edit/remove code under this line
module.exports = { replaceWord, hideWord };
