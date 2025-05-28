
// 1. Creating an object literal
const  person1 = {
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

const  person2 = {
    firstName: "Bob",
    lastName: "Alice",
    age: 27,
    isStudent: true,
    hobbies: ["reading", "coding",],
    address: {
        street: "120 Main St",
        city: "New York",
        zip: "10001"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }   
};

// // everything is a object in javascript
// let name ="Hasib";
// let name2 = new String()
// console.log(name.toUpperCase());
// console.log(person1.fullName());

