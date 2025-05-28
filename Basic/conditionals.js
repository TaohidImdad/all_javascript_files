
// 1. IF Statement
// let age = 10;

// if(age < 18){
//   console.log("He is a child");
// }else{
//   console.log("He is an adult");

// }


// let isLogin= false ;

// if (isLogin) {
//     console.log("Welcome!");  
// }else{
//     console.log(" Plese Login !"); 
// }



// let age = 70;

// if(age < 18){
//   console.log("He is a child");
// }else if(age >= 18 && age <= 30){
//   console.log("He is a Young Person");
// }else if (age > 30 && age < 60){
//     console.log("He is a middle age person");
// }else{
//     console.log("He is a seniour citizen");
// }



// // 2. IF...ELSE
// let isRaining = true;


// // 3. IF...ELSE IF...ELSE
// let score = 85;



// // 4. SWITCH Statement
// let day = new Date();
// day= day.getDay();
// day= 0;

// switch(day){
//     case 0:
//      console.log("Sunday");
//      break;
//     case 1:
//      console.log("Monday");
//      break;
//     case 2:
//      console.log("Tuesday");
//       break;
//     case 3:
//      console.log("Wednesday");
//       break;
//     case 4:
//      console.log("Thursday");
//      break;
//     case 5:
//      console.log("Friday");
//      break;
//     default:
//       console.log("Saturday");
//       break;
// }



// // 5. Ternary Operator (Short if-else)
 let isLoggedIn = true;

//  if (isLoggedIn) {
//     console.log("Welcome!");  
// }else{
//     console.log(" Plese Login !"); 
// }

//  console.log( isLoggedIn ? "Welcome!" : " Plese Login !");
 

// // 6. Logical Operators (&&, ||, !)
let hasLicense = false;
let hasCar = false;

if(hasLicense && hasCar){
   console.log("You Can drive");
   
}else if (hasLicense || hasCar){
    console.log("You need a car to drive");
}else{
    console.log("You can not drive");
}


// // 7. Nested Conditionals
let temp = 20;

if (temp > 0){
    if(temp <= 29){
       console.log("its comfortable");
    }else if( temp < 35){
        console.log("its hot");
    }else{
        console.log("dont go outside");
    }


}else{
    console.log("dont go outside cold");
    
}



// let mark = 75;

// if(mark >= 80){
//     console.log("A+");
    
// }else if(mark >= 70){
//     console.log("A+");
// }

