// 1. Function Declaration

function fullName(){
    let first_name= "Jabed";
    let last_name ="Hasan";
    // console.log(first_name +" "+ last_name);
    console.log(`${first_name} ${last_name}`);
    
}
// fullName();


function fullName2(){
    let first_name= "Jubair";
    let last_name ="Hasan";
    return `${first_name} ${last_name}`;

    
}
// console.log(fullName2());


function fullName3(firstName, lastName=""){
  return `${firstName} ${lastName}`;
}

// console.log(fullName3("Mehedi", "Hasan"))
// console.log(fullName3("Khaled"))


// // es6 funciton 

// const fullName4=(first_name, last_name)=>{
//     return `${first_name} ${last_name}`;
// }
// console.log(fullName4("Jamal","Khan"))


// const fullName5= (first_name, last_name) => `${first_name} ${last_name}`;
// console.log(fullName5("Hasin", 'Ahmed'));


const fullName6= first_name => `${first_name} Hasan`;
console.log(fullName6("Hamid"));

const add2 = () => 2+2;

console.log(add2());






// function greet(name) {
//     return "Hello, " + name + "!";
// }

// // 2. Function with Default Parameters
// function greetUser(name = "Guest") {
//     return "Welcome, " + name + "!";
// }


// // 3. Anonymous Function
// const anonymousFunc = function() {
//     console.log("This is an anonymous function.");
// };
// anonymousFunc();

// // 4. Function Expression
// const add = function(a, b) {
//     return a + b;
// };

// // 5. Arrow Function
// const multiply = (a, b) => a * b;

// // 6. Arrow Function with Block Body
// const subtract = (a, b) => {
//     return a - b;
// };

// // 7. Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log("This function runs immediately!");
// })();



// // 8. Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// 9. Callback Function 
// function start(){
//     setTimeout(() => {
//         let date= new Date();
//         console.log( date.toLocaleTimeString())
//         start()
//     }, 1000);
// }

// start()

// 10. Higher-Order Function (Returning Function)
// function multiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(10));


// function (a:Number , b:Numbrr):Number { 
//    return a+b;
//  }