
// let x="";

// for (let i = 1; i <=5; i++) {
   
//     for (let j=0; j<i; j++) {
//         x+= "*";
//     }
//      x+= "\n";
// }

// console.log(x);



// var n=5; 

// for (let i = 1; i <= n; i++) {
//     let star= ""
//     for (let j = 1; j <= n-i; j++) {
//        star +=" ";  
//     }

//    for (let k = 1; k<= (2*i)-1 ; k++) {
//       star+="*";
    
//    }
    
//   console.log(star);  
// }

// var n = 4;
//  for (let i = n; i >=1; i--) {
//      let s="";
//     for (let j = n; j >= i; j--) {
//         s+=" ";
//     }
//     for (let k = 1; k <= (2*i) -1 ; k++) {
//         s+="*";  
//     }
   
//     console.log(s)
//  }

let str= "I Love Bangladesh Very Much"

str = str.split(" ");
console.log(str);

for (let i = 1; i < str.length+1; i++) {
    let print=""
    for (let j = 0; j < i; j++) {
       print+= str[j]+" "
    }
    console.log(print);
    
}
