// // 1. Let and Const (Block-scoped variables)
// let x = 10;  // block-scoped variable
// const y = 20;  // constant, cannot be reassigned

// // 2. Arrow Functions
// const add = (a, b) => a + b;
// console.log(add(5, 3));  // Output: 8

// // 3. Template Literals (String Interpolation)
// let name = 'Alice';
// let greeting = `Hello, ${name}!`;  // Template literal
// console.log(greeting);  // Output: Hello, Alice!

// // 4. Destructuring Assignment
// const person = { name: 'John', age: 30, city: 'New York' };
// const { name, age } = person;  // Object destructuring
// console.log(name, age);  // Output: John 30

// // 5. Default Parameters
// const greet = (name = 'Guest') => {
//   console.log(`Hello, ${name}`);
// };
// greet();  // Output: Hello, Guest
// greet('Bob');  // Output: Hello, Bob

// // 6. Rest Parameters
// const sum = (...numbers) => {
//   return numbers.reduce((acc, num) => acc + num, 0);
// };
// console.log(sum(1, 2, 3, 4));  // Output: 10

// // 7. Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];  // Spread operator to copy and combine arrays
// console.log(arr2);  // Output: [1, 2, 3, 4, 5]

// // 8. Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// const john = new Person('John', 25);
// john.greet();  // Output: Hello, my name is John and I am 25 years old.

// // 9. Modules (Import and Export)
// export const square = (x) => x * x;
// import { square } from './module.js';  // Assuming 'module.js' contains this export

// // 10. Promises (Asynchronous programming)
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve('Success!');
//   } else {
//     reject('Error');
//   }
// });

// myPromise
//   .then(result => console.log(result))  // Output: Success!
//   .catch(error => console.log(error));  // If promise is rejected

// // 11. For...of loop (Iterating over iterable objects like arrays)
// const numbers = [10, 20, 30];
// for (const num of numbers) {
//   console.log(num);  // Output: 10, 20, 30
// }

// // 12. Map and Set
// // Map (Key-value pairs)
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 25);
// console.log(map.get('name'));  // Output: Alice

// // Set (Unique values)
// const set = new Set([1, 2, 3, 3, 4]);
// console.log(set);  // Output: Set { 1, 2, 3, 4 }

// // 13. Async/Await (Simplifying Promises)
// const fetchData = async () => {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

// // 14. Importing Modules (Dynamic Import)
// import('module.js')
//   .then((module) => {
//     console.log(module);
//   })
//   .catch((error) => console.error(error));

// // 15. SetTimeout and SetInterval with Arrow Functions
// setTimeout(() => {
//   console.log('This will execute after 2 seconds');
// }, 2000);

// setInterval(() => {
//   console.log('This will execute every 1 second');
// }, 1000);

// // 16. Object Literal Enhancements
// const name = 'Jane';
// const age = 30;
// const person = { name, age };  // Shorthand property names
// console.log(person);  // Output: { name: 'Jane', age: 30 }
