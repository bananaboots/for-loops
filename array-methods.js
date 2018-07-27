/* For each example of code please identy
   the higher order function and the callback function(s) */

/* For both types of functions, you will describe the
   parameters and return values (if any) */

// Question 1:

function returned() {
  console.log("The king hath returned from the hunt!");
}

function death() {
  console.log("The king is dead!");
}

function birth() {
  console.log("An heir has been born today!");
}

function announce(cb) {
  console.log("Hear ye! Hear ye!");
  cb();
}

announce(returned);
announce(birth);
announce(death);

/**
  1a) What is the higher order function is this example? List the parameters and return values.
  announce is the higher order function, and takes a callback function as its parameter.

  1b) What are the callbacks in this example? List the parameters and return values for each.
  There are three callback functions, which take in no arguments and have no return values: returned, death, and birth.
*/

// Question 2:

function addFn(x, y) {
  return x + y;
}

function subtractFn(x, y) {
  return x - y;
}

function combine(x, y, cb) {
  return cb(x, y);
}

const result1 = combine(1, 4, addFn);
const result2 = combine(9, -2, subtractFn);
const result3 = combine(2, 3, function(x, y) {
  return x * y;
})

/**
  2a) What is the higher order function? List the parameters and return values.
  combine is the higher order function, which takes in three parameters: two numbers, x and y, and one callback function.
  2b) What are the callbacks? List the parameters and return values for each.
  addFn, subtractFn, and an anonymous function declared in result3. They each take in two paramenters which are both numbers, x and y.
*/


// Question 3:

function addExcitement(string) {
  return 'string' + '!';
}

const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
const excitedPhrases = phrases.map(addExcitement);

/**
  3a) What is the higher order function? List the parameters and return values.
  map is the higher order function; it takes in a callback parameter, and returns the phrases array with exclamation points.
  3b) What are the callbacks? List the parameters and return values for each.
  addExcitement is the callback, which takes in a string, and returns the string with an exclamation point.
*/


// Stretch Question 4:

function findLongest(str1, str2) {
  const firstLonger = str1.length >= str2.length;

  if (firstLonger) {
    return str1;
  } else {
    return str2;
  }
}

const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];

const longestWord = words.reduce(findLongest);
const longestPhrase = phrases.reduce(findLongest);

/**
  4a) What is the higher order function? List the parameters and return values.
  reduce is the higher order function. It takes in a callback function, and returns the longest string in the array.
  4b) What are the callbacks? List the parameters and return values for each.
  findLongest is the callback function. It takes in two strings as its parameters, str1 and str2.
*/


// END PART ONE !!!
// PART TWO:




// The following arrays will be used through the questions:
const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const numbers = [ 8, 3, 22, 0, -73, 15 ];

// Question 1:
// Use forEach to console.log all the words in the words array. Do not write a for loop.
function logWords(){
  words.forEach(function(item) {
    console.log(item);
  });
}

// Question 2: Use forEach to console.log the each number in the numbers array divided by two
// It should console.log:
// 4
// 1.5
// ...etc.
function logHalfNumbers(){
  numbers.forEach(function(item) {
    console.log(item / 2);
  });
}

// Question 3: Using the getFirstLetter function below as your callback,
//             use map to create an array contaning the first letter of
//             every word from the words array.

function getFirstLetter(word) {
  return word.split('')[0];
}

const firstLetters = words.map(getFirstLetter);

// Question 4: Use map to create an array containing the last letter of every word
//             from the words array.

const lastLetters = words.map(function(word) {
  return word.split('')[word.length - 1];
});

// Question 5: Use map to create an array containing the reversed version of each word
//             from the word array. For example, the first entry will be 'supmawyttac'.

const reversedWords = words.map(function(word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
});

// Question 6: Use map to create an array containing the absolute value of every number
//             in the numbers array.

const absoluteNumbers = numbers.map(function(item) {
  return Math.abs(item);
});

// Question 7: Use map to create an array containing each number from the numbers array
//             rounded to the nearest 10. For example: 10, 0, 20, 0, etc.

const roundedToTenNumbers = numbers.map(function(item) {
  return (Math.round(item / 10) * 10);
});

// Question 8: Use map to create an array that contains only the words from the words
//             array containing 's'. All other words should be replaced with null.
//             For example: 'cattywampus', 'snickersnee', null, etc.

const wordsWithS = words.map(function(element) {
  if (element.includes('s')) {
    return element;
  } else {
    return null;
  }
});

// Stretch Questions:
// The stretch question will use the array method reduce, which was only briefly reviewed
// in the lecture. Refer to online documentation for more information on reduce.
// Question 9: Use reduce to sum up all of the numbers in the numbers array.

function sum(currentTotal, nextNumber) {
  return sumTotal;
}

const sumTotal = numbers.reduce(function(currentTotal, nextNumber) {
  return currentTotal + nextNumber;
});

// Question 10: Use reduce to find the word from the words array that is last in the alphabet.

const alphabeticallyLast = words.reduce(function() {
  words.sort();
  return words[words.length - 1];
});
