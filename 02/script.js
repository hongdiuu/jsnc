// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // pop() - Take the last value off
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// arr.unshift(99);

// // shift() - Remove first value
// arr.shift();

// // reverse() - Reverse an array
// arr.reverse();

// // includes() - Check to see if something is in the array
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// x = arr.toString();
// x = arr.join();

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);


// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // pop() - Take the last value off
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// arr.unshift(99);

// // shift() - Remove first value
// arr.shift();

// // reverse() - Reverse an array
// arr.reverse();

// // includes() - Check to see if something is in the array
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// x = arr.toString();
// x = arr.join();

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);

// let x;

// // Creating an object
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// // Accessing object properties
// x = person.name; // Dot notation
// x = person['age']; // Bracket notation
// x = person.address.state;
// x = person.hobbies[0];

// // Updating properties
// person.name = 'Jane Doe';
// person['isAdmin'] = false;

// // Deleting properties
// delete person.age;

// // Create new properties
// person.hasChildren = true;

// // Add functions
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// // Keys with multiple words
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);

// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Step 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);

