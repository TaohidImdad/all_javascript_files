// JavaScript Operators Examples



// 1. Arithmetic Operators
// let a = 15;
// let b = 6;

//Addition
//Subtraction
//Multiplication
//Division
//Modulus
//Exponentiation


// console.log( a + b);  
// console.log( a - b);  
// console.log( a * b);  
// console.log( a / b);  
// console.log( a % b); 
// console.log( a ** b);  

// 2. Assignment Operators


//  let x = 10;
//Addition Assignment
//   x  += 5;       // x = x + 5
// console.log(x);

//Subtraction Assignment
// x -= 3;  // x = x - 3

// console.log(x);

// Multiplication Assignment
// x *= 2;  // x = x * 2
// console.log( x); 

// Division Assignment
// x/=2   // x = x / 2
// console.log(x);

// Modulus Assignment
// x %= 5;  // x = x % 5
// console.log(x);
// x **= 3; // x = x ** 3
// console.log("Exponentiation Assignment:", x); 

// 3. Comparison Operators
// Equal
// Strict Equal 
// Not Equal
// Strict Not Equal
// Greater than
// Less than
// Greater than or equal
// Less than or equal




// console.log( a == b); 
// console.log(a === b); 


// console.log( a != b); 
// console.log( a !== b); // true

// console.log( a > b); // true

// console.log( a < b); // false


// console.log( a >= b); // true


// console.log( a <= b); // false

// 4. Logical Operators
// AND
// OR
// NOT


let a = 3;
let b = 9;

// console.log( a > 5 && b < 10); // true
// console.log( a > 5 || b > 10); // true
// console.log( !(a > 5)); // false


//  +----- swithch  ----   swithch -------   light 
//  - ---------------------------------------


//  +----- swithch  ---------   light 
//    +---- swithch -----------
//  - ---------------------------------------


// // 5. Ternary Operator
// let result = a > b ? "A is greater" : "B is greater";
// console.log( result);

// // 6. Type Operators
// console.log( typeof a); // "number"
// console.log( [] instanceof Array); // true

// // 7. String Operators
// let str1 = "Hello"; 
// let str2 = " World";
// console.log( str1 + str2); // "Hello World"

// 8. Nullish Coalescing Operator
let value = null;
console.log(value ?? "Default Value"); // "Default Value"

// 9. Optional Chaining
let obj = { name: "John" , address:{street:"abc"}};
console.log( obj?.address?.street); // undefined

// 10 bitwise operator


