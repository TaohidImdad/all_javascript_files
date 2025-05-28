
// 1. FOR Loop

// 1. initialization
// 2. condition
// 3. increment or dicriment 

// for(let i=1; i<=5; i= i+1){
//    console.log("Hello World");
//    console.log(i);
   
// }


// // 2. WHILE Loop

// 1. initialization
// 2. condition
// 3. increment or dicriment

//  let i= 5;
//  while(i >=1){
//     console.log(`Hello world ${i}`);
//    i= i-1; 
//  }

// // 3. DO...WHILE Loop

// 1. initialization
// 2. condition
// 3. increment or dicriment

// let attemt = 0
// let i =1;

// do{
//  console.log("Hello world");
//  i= i+1;
//  attemt = attemt +1
//  if (attemt == 6) {
//     console.log("You Have Request to many times");
//     break;
//  } 
// }while(i <= 10)

// 4. FOR...OF Loop (arrays)
            //  0          1        2
let fruits = ["apple", "banana", "mango"];
// console.log(fruits[2]);
// console.log(fruits.length);


// for (let i = 0; i < fruits.length; i++) { 
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log( fruit);
// }

// let a = "Hello World";

// for (let b of a) {
//     console.log( b);
// }

// 5. FOR...IN Loop (objects)
// let car = { brand: "Toyota", model: "Corolla", year: 2022 };

// for (let key in car) {
//     console.log(key + ":", car[key]);
// }

// console.log(`Barand: ${car.brand}`);
// console.log("Barand:"+car.brand);


// // 6. BREAK and CONTINUE
// for (let i = 1; i <= 5; i++) {
//     if (i === 3){
//         break;
//     }
//     console.log("i1:", i); 
// }

for (let i = 1; i <= 5; i= i+1) {
    if (i === 3){
        continue;
    } 

    if (i=== 2) {
        continue;
    }
    console.log("i:", i);
}






