// example:
// Write a for loop that logs the numbers 0 through 5
for (let i = 0; i < 6; i++) {
  console.log(i);
}


// 1.
// Write a for loop that logs the numbers 0 through 10
for (let i = 0; i < 11; i++) {
  console.log(i);
}



// 2.
// Write a loop that logs the numbers 10 through 0
for (let i = 10; i >= 0; i--) {
  console.log(i);
}


// 3.
// Write a loop that logs the word "Hippopotamus" 17 times.
for (let i = 0; i < 18; i++) {
  console.log('Hippopotamus');
}


// 4.
// Write a for loop that logs 2, 4, 6, 8, 10
for (let i = 2; i < 11; i = i + 2) {
  console.log(i);
}


// 5.
// Write a loop that logs the numbers 2, 4, 6, 8.
// Do not edit the existing code.

for (let i = 0; i < 4; i++) {
  console.log(i * 2 + 2);
}

// 6.
// Write a loop that logs the numbers 5 through 10.
// Do not edit the existing code.

for (let i = 0; i < 20; i++) {
  if (i > 4 && i < 11) {
    console.log(i)
  }
}

// 7.
// Write a loop that logs "Marco!" when i is even,
// "Polo!" when i is odd,
// and 'Game Over!' when i is 0.
// Do not edit the existing code.

for (let i = 10; i >= 0; i--) {
  if ((i > 0) && (i % 2 === 0)) {
    console.log('Marco!');
  } else if (i > 0) {
    console.log('Polo!');
  } else if (i === 0) {
    console.log('Game Over!');
  }
}

// 8.
// Use an else-if statement to assign all four null variables based on the age variable.
// The code should work regardless of what value age is assigned to.
// Assume the driving age is 16, voting age is 18, drinking age is 21, and retirement age is 66.
const age = 26;
let canDrive = null;
let canVote = null;
let canDrink = null;
let canRetire = null;


// Write all of your code below. Do not change the code above.
if (age < 16) {
  canDrive = false;
  canVote = false;
  canDrink = false;
  canRetire = false;
} else if (age < 18) {
  canDrive = true;
  canVote = false;
  canDrink = false;
  canRetire = false;
} else if (age < 21) {
  canDrive = true;
  canVote = true;
  canDrink = false;
  canRetire = false;
} else if (age < 66) {
  canDrive = true;
  canVote = true;
  canDrink = true;
  canRetire = false;
} else if (age > 65) {
  canDrive = true;
  canVote = true;
  canDrink = true;
  canRetire = true;
}



// STRETCH PROBLEMS (NOT REQUIRED)

// 9.
// Find a second way to write the loop from question 4.
for (let i = 2; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 10.
// Write a loop that logs the numbers 0 through 10.
// Only add code in the parenthesis following the 'for' keyword
// Finish the code in the parentheses

for (let i = 0; i <= 50; i = i + 5) {
  //Do not add or edit code below here!
  if (i < 0) {
    continue;
  } else if ( i > 50) {
    break;
  } else {
    console.log(i/5);
  }
}

// 11.
// Imagine you throw two six sided dice and sum up the total.
// Write a loop that logs every possible score you could roll.
// Used a nested for loop ( a loop inside of a loop)
// Bonus Challenge: Don't log repeats.



let array = [];
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <=6; j++) {
   if (array.includes(i + j)) {
    continue;
   } else {
    array.push(i+j);
   }
   console.log(i+j)
  }
}
