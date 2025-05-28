

class Person{
      constructor(firstName, lastName, age){
            this.firstName=firstName,
            this.lastName=lastName,
            this.age=age  
         }

   fullName(){
    return `My name is ${this.firstName} ${this.lastName}`;
   }
}

let person1 = new Person("Salam", 'Khan', 30);
let person2 = new Person("Jaman", 'Khan', 30);
console.log(person1);
console.log(person1.fullName());



