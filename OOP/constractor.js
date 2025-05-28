const  person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,  
};

function Person(firstName, lastName, age){
   this.firstName=firstName,
   this.lastName=lastName,
   this.age=age
   
}

Person.prototype.fullName=function(){
    return `My name is ${this.firstName} ${this.lastName}`;
  }

// console.log(person1);
let person2= new Person('Salam', "Aslam", 25);
let person3= new Person('Abdul', "Hayy", 24);


console.log(person2);


// console.log(person3);
