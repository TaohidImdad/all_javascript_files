
// 1. Creating an object literal
const  person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding", "football"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    
};


// 1 make an object 
// 2 add a  property 
// 3 modify a property
// 4 delete a property 
// 5 use Object.keys, Object.values , Object.entries
// 6 use for in loop




// console.log("Person Object:", person);



// const data= [
//     { firstName: "John",
//         lastName: "Doe",
//         age: 25,
//         isStudent: true,
//         hobbies: ["reading", "coding", "football"],
//         address: {
//             street: "123 Main St",
//             city: "New York",
//             zip: "10001"
//         },
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//         }},
//     { firstName: "Hasan",
//         lastName: "Rabbi",
//         age: 26,
//         isStudent: true,
//         hobbies: [ "coding", "football"],
//         address: {
//             street: "123 Rampura",
//             city: "Dhaka",
//             zip: "1213"
//         },
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//         }},
// ];


// const data2=[
//     [100,2,3,4,5],
//     [1,50,3,4,5],
//     [1,2,60,4,5],
//     [1,2,3,70,5],
//     [1,2,3,4,90],
// ]

// data.forEach((d)=>{
//     // console.log(d.fullName());  
// })
// const arr= [2,1,3,0,4]
// // 3,50, 4, 1,90
// data2.forEach((d2, i)=>{
//     console.log(d2[arr[i]]);
// });

// // 2. Accessing object properties
// console.log("First Name:", person.firstName);
// console.log("City:", person.address.city);
// console.log("First Hobby:", person.hobbies[0]);

// // 3. Calling a method inside an object
// console.log("Full Name:", person.fullName());

// // 4. Modifying object properties
person.age = 26;
// console.log("Updated Age:", person.age);

// 5. Adding a new property
person.email = "john.doe@example.com";
// console.log("Added Email:", person.email);

// console.log(person);


// // 6. Deleting a property
delete person.isStudent;
// console.log("After Deleting isStudent:", person);

// 7. Looping through object keys
// console.log("Looping through properties:");
// for (let key in person) {
//     console.log(key + ":", person[key]);
// }

// // 8. Object.keys, Object.values, Object.entries
// console.log("Keys:", Object.keys(person));
// console.log("Values:", Object.values(person));
// console.log("Entries:", Object.entries(person));

// // 9. Using shorthand syntax (ES6)
const name = "Alice";
const score = 90;

const student ={
    name,       // same as name: name
    score,
    greet() {   // same as greet: function() {}
        console.log("Hello, I'm " + this.name);
    }
};

// console.log("Student Object:", student);
 student.greet();
