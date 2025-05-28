
// // 1. Sum of two numbers

//   function sum(a, b){
//      return a + b;
//   }
//   const sum2 = (a, b)=>{
//     return a+b
//   }
//   const sum3 = (a, b)=>  a+b
  
  
//   // 2. Square a number

//    function square(n){
//      return n*n;
//    }

//   // console.log(square(6))

//   // 3. Check if even
  
//   function isEvenOdd(val){
//       if(val % 2 == 0){
//         return "Even Number"
//       }else{
//          return "Odd Number"
//       }
//   }

  
//   // 4. Convert to uppercase

//   var text1= "banglades"
//   //  console.log(text1.toUpperCase())
 
//   function texttouppercase(text){
//     return  text.toUpperCase()
//   }

//   // console.log(texttouppercase("bangladesh"))

//   // 5. Reverse a string
  
//   //  function ReverseString(p) {
//   //     return p.split("").reverse().join("")
//   //  }
//   //  console.log(ReverseString("Banladesh"))
  
//   // 6. Get array length
 
  
//   function getLength(arr) {
//     return arr.length
//  }
// //  console.log(getLength([1,2,3,4]))

  
//   // 7. Double array values
  
//   // const a= [1,5,6,10]

//   // const double = a.map((arr)=> {
//   //    return arr*2 
//   // })

  
//   // console.log(double);
//   // console.log(a);
  
//   // 8. Find max


//   // 9. Find min


  
//   // // 10. Sum array
  
// //   function getLength(arr) {
// //     return arr.reduce((acc , val)=> acc +val , 0)
// //  }
// //  console.log(getLength([1,2,3,4]))



//   // // 11. Check palindrome

//    function isPalindrome(str){
//       let reverstr= str.split("").reverse().join("")
//       return reverstr === str ;
//    }


//   // console.log(isPalindrome("civice"))
 
//   // // 12. Capitalize first letter
 
//   function CapitalizeStr(str){
//      return str[0].toUpperCase() + str.slice(1) ;
//  }

//  var str= "i love bangladesh very Much";
 
 
//  function SCap(str){
//   str = str.split(" ")
//   var a =  str.map( s => {
//    return  CapitalizeStr(s)
//  })
//  return  a.join(" ")
//  }

// // console.log(SCap(str))

//   // // 14. Factorial
  
//   function Factorial(num){
//     let res= 1
//     for (let i = 1; i <= num; i++) {
//        res *= i
//     }
//    return res;
//  }

// // console.log(Factorial(5));

//   // // 15. Remove duplicates

//   function RemoveDup(arr){
//     let a=  arr.filter((num , i)=>{
//        return arr.indexOf(num) === i 
//      })

//      return a;
//    }

// // console.log(RemoveDup([1,2,3,2,5,6,4,4]));

//   // // 16. Merge arrays
  

//   function mergeArr(arr1, arr2){
//      return [...arr1, ...arr2];
//    }

// // console.log(mergeArr([1,2,3,2,5,6,4,4], [10,15]));

  
//   // // 17. Find index
//   let findArr= [1,2,3,2,5,6,4,4]
//   function findIndex(arr, val){
    
//      return arr.indexOf(val);
//    }

// // console.log(findIndex(findArr, 4));


//   // // 18. Convert to array
// //   function ConvertArr(...val){
// //     return  val;
// //   }
// // console.log(ConvertArr(1,2,3,2,5,6,4,4,5, "a", "b"));



//   // // 19. Check prime
  
// //   function isPrime(num){
// //      if(num <= 2 ) return false;
// //      for (let i = 2; i < num; i++) {
// //         if(num % i === 0){
// //           return false
// //         }
// //      }
// //      return true;
// //   }
// // console.log(isPrime(10));

//   // // 20. Check type

// //    function CheckType(val){
// //     return  typeof val;
// //   }
// // console.log(CheckType(true));
  
//   // // 21. Is array?
//   function isArray(val){
//     return  Array.isArray(val);
//   }
// // console.log(isArray([1,3,1]))
  
//   // // 22. Get last item

//   function GetLastItem(arr){
//     return  arr[arr.length - 1] ;
//   }
//   console.log(GetLastItem([1,3,5]))
  
//   // // 23. Get first item
//   function GetFirstItem(arr){
//     return  arr[0] ;
//   }
//   console.log(GetFirstItem([1,3,5]))
  
//   // // 24. Check undefined
 
//   var ab;
//   function Undefined(arr){
//     return   typeof arr === "undefined" ;
//   }
//   console.log(Undefined(ab))

//   // // 25. Get current year
 
  
//   // // 26. Celsius to Fahrenheit
//   // //c * 9 / 5 + 32;
  
//  function CelToFahr (c) {  
//   return c * 9 / 5 + 32
//  }
  
//   // // 27. Remove falsy
 
//   function RemovFalsy(arr){
//     return arr.filter(a => a != false) ;
//   }

//   console.log(RemovFalsy([1, 2 , false, true]));
  
 
//   // // 28. Absolute value
  
  
//   // // 29. Round number
 

  
//   // // 30. Floor number
 
  
//   // // 31. Ceil number

  
//   // // 32. Array of keys
  
 
//   function ArrKeys(obj){
//     return Object.keys(obj)
//   }

//   console.log(ArrKeys({name: "hasan", age:29}));

//   // // 33. Array of values
 
//   function ArrValues(obj){
//     return Object.values(obj)
//   }

//   console.log(ArrValues({name: "hasan", age:29}));
  

  