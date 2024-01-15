// // Define a function
// function sayHello() {
//     console.log('Hello World');
//   }
  
//   // Invoke, execute or call a function
//   sayHello();
  
//   // Define a function with parameters
//   function add(num1, num2) {
//     console.log(num1 + num2);
//   }
  
//   // Invoke function with arguments
//   add(5, 10);
  
//   // Parameters vs. Arguments
//   // Parameters are the names of the variables that are used to pass data into a function.
//   // Arguments are the values that are passed into the function
  
//   // Returning a value
//   function subtract(num1, num2) {
//     return num1 - num2;
  
//     console.log('After the return');
//   }
  
//   // Assign the returned value to a variable
//   const result = subtract(10, 2);
  
//   console.log(result, subtract(20, 5));


//   // Default Params
// function registerUser(user = 'Bot') {
//     // Old way - before using `=`
//     // if (!user) {
//     //   user = 'Bot';
//     // }
  
//     return user + ' is registered';
//   }
  
//   console.log(registerUser());
  
//   // Rest Params
//   function sum(...numbers) {
//     let total = 0;
  
//     for (const num of numbers) {
//       total += num;
//     }
  
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
//   // Objects as params
//   function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
//   }
  
//   const user = {
//     id: 1,
//     name: 'John',
//   };
  
//   console.log(loginUser(user));
//   console.log(
//     loginUser({
//       id: 2,
//       name: 'Sara',
//     })
//   );
  
//   // Arrays as params
//   function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
  
//     const item = arr[randomIndex];
  
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   // Global scope variable
// const x = 100;

// console.log(x, 'in global');

// function run() {
//   // Access global vars in functions
//   console.log(window.innerHeight);
//   console.log(x, 'in function');
// }

// run();

// // Access global vars in blocks
// if (true) {
//   console.log(x, 'in block');
// }

// function add() {
//   // Overwriting global x (variable shadowing)
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }

// // Can not access a function scoped variable in global scope
// console.log(y);

// add();

// //  Normal function declaration
// // function add(a, b) {
// //   return a + b;
// // }

// // Arrow function syntax
// const add = (a, b) => {
//     return a + b;
//   };
  
//   // Implicit Return
//   const subtract = (a, b) => a - b;
  
//   // Can leave off () with a single param
//   const double = (a) => a * 2;
  
//   // Returning an object
//   const createObj = () => ({
//     name: 'Brad',
//   });
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   numbers.forEach(function (n) {
//     console.log(n);
//   });
  
//   // Arrow function in a callback
//   numbers.forEach((n) => console.log(n));
  
//   console.log(add(1, 2));
//   console.log(subtract(10, 5));
//   console.log(double(10));
//   console.log(createObj());


//   // Challenge 1
// // function getCelsius(f) {
// //   const celsius = ((f - 32) * 5) / 9;
// //   return celsius;
// // }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(35)} \xB0C `);

// // Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([2, 31, 4, 5, 6]));

// // Challenge 3
// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//   console.log(output);
// })(20, 10);


function first() {
    console.log('first...');
  }
  
  function second() {
    console.log('second...');
  }
  
  function third() {
    console.log('third...');
  }
  
  first();
  second();
  third();