for (let i = 0; i < 6; i++) {
  console.log(i);
}


for (let i = 0; i < 11; i++) {
  console.log(i);
}


for (let i = 10; i >= 0; i--) {
  console.log(i);
}


for (let i = 0; i < 18; i++) {
  console.log('Hippopotamus');
}


for (let i = 2; i < 11; i = i + 2) {
  console.log(i);
}


for (let i = 0; i < 4; i++) {
  console.log(i * 2 + 2);
}


for (let i = 0; i < 20; i++) {
  if (i > 4 && i < 11) {
    console.log(i)
  }
}


for (let i = 10; i >= 0; i--) {
  if ((i > 0) && (i % 2 === 0)) {
    console.log('Marco!');
  } else if (i > 0) {
    console.log('Polo!');
  } else if (i === 0) {
    console.log('Game Over!');
  }
}


const age = 26;
let canDrive = null;
let canVote = null;
let canDrink = null;
let canRetire = null;



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




for (let i = 2; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



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
