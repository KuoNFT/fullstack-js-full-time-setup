//fonction pour afficher tous les nombres impairs entre 1 et 100 
function displayOddNumbers() {
    let oddNumbers = [];
    for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
    oddNumbers.push(i);
    }
    }
    console.log(oddNumbers);
    }
    
    //displayOddNumbers();


//fonction addition des nombres pairs de 1 à 100
function sumEvenNum() {
    let isEven = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        isEven += i;
      }
    }
    console.log(isEven);
  }
  
  //sumEvenNum();

//Fonction Nombre premier 
function nombresPremiers(number) {
    if (number < 2) {
      console.log(`${number} n'est pas un nombre premier`);
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        console.log(`${number} n'est pas un nombre premier`);
        return false;
      }
    }
    console.log(`${number} est un nombre premier`);
    return true;
  }
  
  //nombresPremiers(11);

  //fonction palindrome 

  function isPalindrome(word){ 
    let reverseWord = word.split('').reverse().join('')
    if(word === reverseWord){
        console.log(`${word} est un palindrome`)
        return true;
    } else {
        console.log(`${word} n'est pas un palindrome`)
        return false
    }
  }
//isPalindrome('benjamin')

//fonction pour trier un tableau d'entiers dans l'ordre croissant/décroissant.

function isSorted(array) {
    array.sort((a, b) => a - b);
    return array;
  }
  
  console.log(isSorted([340, 54, 32, 233, 122])); // [340, 233, 122, 54, 32]

  function isSorted(array) {
    array.sort((a, b) => b - a);
    return array;
  }
  
  console.log(isSorted([340, 54, 32, 233, 122])); // [340, 233, 122, 54, 32]