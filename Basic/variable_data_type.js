// JavaScript Data Types with Examples

var name="Hasib";
let student_Name= 'Hasnain';
const pi= 3.1416;

// console.log(name);
// console.log(student_Name);

// primitive 
// 1. String
let student_First_Name= 'Hasnain';
// 2. Number
let num= 122.1234
// console.log(typeof(num));
// 3. Boolean
let x = true;
// console.log(typeof(x));
// 4. Undefined
let y
// 5. Null (Intentional absence of value)
let xyz= null;
//  console.log(typeof(null));
// 6. Symbol (Unique identifier)
// console.log(typeof(Symbol("abc")));

// Non primitive
// 7. Object
let person= {
    name:'Rashed',
    age:25,
    mobile:"01761747402",
    family_member:["Karim", "Rahim", "Jabbar", "Rashed"],
    bankmoney:function add(){
        let x = 5;
        let y=10;
       return x+y; 
    },
    address:{
        house:20,
        road_no:"02",
        village:"Uttara",
        district:"Dhaka"
    },
}
//  console.log(person.family_member[2])
// 8. Array (Special type of object)
            //   0         1         2         3
 let students= ["Karim", "Rahim", "Jabbar", "Rashed"];
//  console.log(students[3]);
 
// 9. Function (Special type of object)

function add(){
    var y=10;
    var x=5;
     x= 10;

     const ab= 50;
     ab= 60;
   
    console.log(ab);
   return x+y; 
}

 console.log( add()) 



