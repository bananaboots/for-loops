
// getThird takes in an array
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

function getThird(array) {
  return array[2];
}


// stringLengths takes in four strings
// it returns an array containing the length of each string
// Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6]

function stringLengths(str1, str2, str3, str4) {
  let array = [];
  array.push(str1.length, str2.length, str3.length, str4.length);
  return array;
}


// removeFirst takes in an array
// it returns the same array, but with the first item removed
// Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
//          return ['toad', 'cricket', 'skunk']

function removeFirst(array) {
  array.shift();
  return array;
}


// swap takes in an array and two indices
// it returns the array with the items at i and j swapped
// Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
//          return ['skateboard', 'scooter', 'unicycle', 'canoe'];

function swap(array, i, j) {
  array.splice(j, 1, array.splice(i, 1, array[j])[0]);
  return array;
}


// getValue takes in an object and a key name
// if the key exists in the object, return the value of that key
// if not, return null
// Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last')
//          would return 'Peppermill'

function getValue(object, key) {
  if (!(object.hasOwnProperty(key))) {
    return null;
  } else if (object.hasOwnProperty(key)) {
    return object[key];
  }
}


// generateCSS takes in three strings containing CSS values
// it returns an object with the CSS key value pairs
// Example: generateCSS('100px', '70px', 'blue') would return
//          { height: '100px', width: '70px', color: 'blue' }

function generateCSS(height, width, color) {
  let object = {};
  object.height = height;
  object.width = width;
  object.color = color;
  return object;
}


// getValues takes in an objects
// it return an array containing the values from that object
// Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
//          would return ['Ally', 27, 'hypnotist']

function getValues(obj) {
  return Object.values(obj);
}


// STRETCH PROBLEMS (NOT REQUIRED)

// wrapAround takes in an array
// and returns an array with the last item in the first spot
// and everything else shifted one index over
// Example: wrapAround(['teaspoon', 'meat grinder', 'spatula', 'salad fork'])
//          would return ['salad fork', 'teaspoon', 'meat grinder', 'spatula']

function wrapAround(array) {
  array.unshift(array.pop());
  return array;
}


// count takes in an array
// and returns an objects containing a frequency count for each item in the array
// Example: count(['red', 'blue', 'blue', 'pink', 'blue', 'green', 'red']) would
//          return { red: 2, blue: 3, pink: 1, green: 1}

function count(array) {
  let object = {};
  for (let i = 0; i <= array.length - 1; i++) {
    if (!(object.hasOwnProperty(array[i]))) {
      object[array[i]] = 1;
    } else if (object.hasOwnProperty(array[i])) {
      object[array[i]]++;
    }
  }
  return object;
}

count(['red','blue','blue','pink','blue','green','red']);
