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

//Fonction pour voir si un nombre est pair 

function isEven(number) {
  return number % 2 === 0;
}

// Test de la fonction
console.log(isEven(4)); // Résultat : true
console.log(isEven(7)); // Résultat : false

//Fonction pour voir inverser une chaine de caractère 

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test de la fonction
console.log(reverseString("Hello")); // Résultat : "olleH"

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


//fonction pour trier des nombres dans une array :
function getRangeTable(minVal, maxVal) {
    const list = [];
    for (let i = minVal; i <= maxVal; i++) {
        list.push(i);
    }
    return list;
}

console.log(getRangeTable(-5, 5));
// Expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  
 

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

//Fonction retrouver les palindromes dans une array : 
function getPalindromes(words) {
    // Initialiser une liste vide pour stocker les palindromes
    const palindromes = [];
    
    // Parcourir chaque mot dans le tableau
    for (let i = 0; i < words.length; i++) {
    // Inverser le mot et comparer avec le mot original
    const reversed = words[i].split('').reverse().join('');
    if (words[i] === reversed) {
    // Si le mot est un palindrome, l'ajouter à la liste
    palindromes.push(words[i].toUpperCase());
    }
    }
    
    // Trier la liste de palindromes par ordre alphabétique
    palindromes.sort();
    
    return palindromes;
    }

    const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT','LOL', "MODEM"];
    console.log(getPalindromes(examplePalindromes));
    // Expected: ['ANNA', 'KAYAK', LOL']

    //Savoir si deux chaines de caractères sont des anagrames : 

    function areAnagrams(str1, str2) {
      if (str1.length !== str2.length) {
        return false;
      }
      const charCount = {};
      for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
      }
      for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (!charCount[char]) {
          return false;
        }
        charCount[char]--;
      }
      return true;
    }
    
    // Test de la fonction
    console.log(areAnagrams("listen", "silent")); // Résultat : true
    console.log(areAnagrams("hello", "world")); // Résultat : false
    

//Générer tous les anngrames d'un mot 
function anagramMe(word) {
    const anagramList = [];
    
    if (word.length === 1) {
        return [word];
    }
     
    for (let i = 0; i < word.length; i++){
        const letter = word[0];
        const newWord = anagramMe(word.slice(1, word.length));
        
        for (let j = 0; j < newWord.length; j++) {
            anagramList.push(letter + newWord[j]);
        }
        
        word = word.substr(1, word.length - 1) + letter;
    }
    
    return anagramList.sort();
}

console.log(anagramMe('AGE'));
// Expected: ['AEG', 'AGE', 'EAG', 'EGA', 'GAE', 'GEA']


//Trouver le minimum dans une array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Test de la fonction
const myArray = [12, 4, 6, 45, 8];
console.log(findMin(myArray)); // Résultat : 4
    

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


  //To roman number

  function toRomanNumerals(number) {
    const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let romanValue = '';
    
    for (let i = 0; i < arabicValues.length; i++) {
      while (number >= arabicValues[i]) {
        romanValue += romanValues[i];
        number -= arabicValues[i];
      }
    }
    
    return romanValue;
  }
  
  console.log(toRomanNumerals(984)); // Expected: 'CMLXXXIV'


  //Suite de fibo 

  function fibonacci(n) {
    let result = [0, 1];
    if (n <= 2) {
    return result.slice(0, n);    
  }
 
 let first = 0;
 let second = 1;
 let next;
  
 //Ecrivez votre code ici
for(let i = 2; i < n; i++){
next = first + second;
first = second;
second = next;
result.push(next);
}
 return result;
}

console.log(fibonacci(2))

//fonction pour remplacer les champs vides dans une liste d'objets par null 

function checkValues(data) {
    let newList = [];
    for (let i = 0; i < data.length; i++) {
    let user = data[i];
    for (let key in user) {
      if (user[key] === '' || user[key] === ' ') {
        user[key] = null;
      }
    }
    newList.push(user);
  }

  return newList;
}

const list = [
   { fullname: 'John Doe', age: 42, tel: '', email: ' ' },
   { fullname: 'Vanessa Williams', age: '', tel: ' ', email: 'v.williams@gmail.com' },
   { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: '' },
];
console.log(checkValues(list));
// Expected:
// [{ fullname: 'John Doe', age: 42, tel: null, email: null },
//     { fullname: 'Vanessa Williams', age: null, tel: null, email: 'v.williams@gmail.com' },
//     { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: null }]


//retrouver un éléments dans une array (find):

function findUser(request, list) {
    let userFound = false;
    for(let i = 0; i < list.length; i++){
  if (list.find(request => request === list[i]) === request ){
      userFound = true;
  }
        
    }
    // Insert your code here
    
   return userFound;
}

const search = 'Lucas';
const usersList = ['Lucas', 'Juliette', 'William', 'Camille', 'Pauline', 'Sébastien'];

console.log(findUser(search, usersList));
// Expected: true


//Mini UNO : simule un tour de UNO, la première carte qui correspond est jouée :

function getFirstCardToPlay(cards, lastPlay) {
    // Insert your code here
    // on veut itérer dans cards et regarder si lastplay color ou last play number correspond à une de nos cartes. La première qui correspond prend la place lastPlay 
    for(let i = 0; i <cards.length; i++){
        const card = cards[i];
        if(card.color === lastPlay.color || card.number === lastPlay.color){
        
        return card;
            
        }
    }
    return null
}

const cardsExample = [
    { color: 'green', number: 6 },
    { color: 'red', number: 6 },
    { color: 'red', number: 9 },
    { color: 'green', number: 9 },
    { color: 'yellow', number: 9 },
];
const lastPlayExample = { color: 'blue', number: 6 };

console.log(JSON.stringify(getFirstCardToPlay(cardsExample, lastPlayExample)));


//Fonction calcul d'un cashback => Le tableau ordersList recense un exemple d’achats effectués par un client sur différents sites partenaires, avec un cashback exprimé en pourcentage (ex: 5 vaut 5 %).
//Le cashback est un montant rétribué au client, venant alimenter une cagnotte dont il peut disposer comme il le souhaite.

function cashback(data){
    let total = 0;
  
    for (const order of data) {
      const cashbackAmount = order.total * order.cashback / 100;
      total += cashbackAmount;
    }
    
    return total.toFixed(2)
  }
  
  const ordersList = [
     {partner: 'Carrefour', total: 57.45, cashback: 5},
     {partner: 'Amazon', total: 60.20, cashback: 3},
     {partner: 'Boulanger', total: 149, cashback: 6},
     {partner: 'Fnac', total: 84.15, cashback: 4},
  ];
  console.log(cashback(ordersList)); // Output: 16.98


  //Savoir si tous les élèments dans une liste sont les mêmes :

  function checkDifferences(arrays) {
    let result = [];
 for(let i =0; i< arrays.length; i++){
     let firstElement = arrays[i][0];
     let same = true;
     
 
 for(let j=0; j < arrays[i].length; j++){
     if(arrays[i][j] !== firstElement){
         same = false;
     }
     }
  result.push(same)
     
 }

    return result;
}

console.log(checkDifferences([
    [true, true, true, true],
    ['test', 'test', 'test'],
    [1, 1, 1, 2],
    ['10', 10, 10, 10]
]));
// Expected: true, true, false, false

//Function find plus gros biggest

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Test de la fonction
const myArray = [12, 4, 6, 45, 8];
console.log(findMax(myArray)); // Résultat : 45


// function Find deuxième plus gros
function findSecondMax(arr) {
  let max = arr[0];
  let secondMax = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

// Test de la fonction
const myArray = [12, 4, 6, 45, 8];
console.log(findSecondMax(myArray)); // Résultat : 12 


//À partir du tableau à deux dimensions, recréez un nouveau tableau des nombres les plus grands de chaque série.

function getBiggest(numbers) {
    let bigNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let biggestNumber = numbers[i][0];
      for (let j = 1; j < numbers[i].length; j++) {
        if (numbers[i][j] > biggestNumber) {
          biggestNumber = numbers[i][j];
        }
      }
      bigNumbers.push(biggestNumber);
    }
  
    return bigNumbers;
  }
  
  let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
  console.log(getBiggest(list)); // [5,27,39,1001]

  //Un candidat passe un test de 10 questions, dont les bonnes réponses sont stockées dans le tableau correctAnswers.
//Les réponses du candidat sont quant à elles stockées dans le tableau results. compare les données dans deux tableaux aux mêmes index

function isSucceeded(ans, res) {
    let success = false;
    let score = 0;
    for (let i =0; i < ans.length; i++){
        if(ans[i] === res[i]){
           score++
        }
    }
    score = (score/ans.length)*100
    if (score >= 50){
        success = true
    }
    // Insert your code here On va devoir comparer deux tableaux. Il faut que index[i] === index[j]. Si c'est le cas alors il faut push pour ajouter +1 à score. Si après la comparaison score > 5 alors success = true
    
    
    return { success: success, score: score };
}

const correctAnswers = [2, 3, 4, 1, 2, 2, 4, 3];
const results = [2, 4, 3, 1, 3, 2, 4, 3];
console.log(isSucceeded(correctAnswers, results));
// Expected: {"success":true,"score":62.5}


//intersection : Écrire une fonction qui prend en entrée deux tableaux de nombres et qui renvoie un nouveau tableau qui contient les nombres qui sont présents dans les deux tableaux.


function intersection(arr1, arr2) {
  const intersectionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersectionArray.push(arr1[i]);
    }
  }
  return intersectionArray;
}

// Test de la fonction
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(intersection(array1, array2)); // Résultat : [3, 4, 5]


//Écrire une fonction qui prend en entrée une chaîne de caractères et qui renvoie la première lettre qui n'apparaît qu'une seule fois dans la chaîne.
function findUnique(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

// Test de la fonction
console.log(findUnique("hello")); // Résultat : "h"
console.log(findUnique("abbcddeff")); // Résultat : "c"


//retrouver les numbres supérieurs à la moyenne dans une array : 

function filterGreaterThanAverage(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / arr.length;
  return arr.filter((num) => num > avg);
}

// Test de la fonction
const myArray = [12, 4, 6, 45, 8];
console.log(filterGreaterThanAverage(myArray)); // Résultat : [12, 45]


