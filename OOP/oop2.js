

/*-----------------------------------------------------------
  1. What is OOP?
  - Object Oriented Programming is a way of structuring code 
    around "objects" that represent real-world entities.
  - Main 4 pillars: Encapsulation, Abstraction, Inheritance, Polymorphism
------------------------------------------------------------*/


/*-----------------------------------------------------------
  2. Object Creation
------------------------------------------------------------*/

// Using Object Literal
const student = {
    name: "Rasel",
    age: 20,
    study: function() {
        console.log(this.name + " is studying.");
    }
};
student.study();

console.log(student);


// // Using Constructor Function (older way)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet = function() {
//     console.log("Hello, my name is " + this.name);
// };
// const p1 = new Person("Imran", 25);
// p1.greet();

// // Using ES6 Class (modern way)
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     study() {
//         console.log(`${this.name} is studying.`);
//     }
// }
// const s1 = new Student("Raju", 21);
// s1.study();


// /*-----------------------------------------------------------
//   3. Encapsulation
//   - Keeping data (properties) safe inside class
//   - Access via methods (getters/setters) or private fields
// ------------------------------------------------------------*/

// class BankAccount {
//     #balance = 0;   // private field (ES2022+)

//     constructor(owner) {
//         this.owner = owner;
//     }

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//         } else {
//             console.log("Insufficient balance!");
//         }
//     }

//     get balance() {
//         return this.#balance;
//     }
// }
// const acc = new BankAccount("Rahim");
// acc.deposit(1000);
// acc.withdraw(300);
// console.log(acc.balance);


// /*-----------------------------------------------------------
//   4. Inheritance (extends + super)
//   - Child class inherits properties and methods of parent
// ------------------------------------------------------------*/

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // call parent constructor
//         this.breed = breed;
//     }
//     makeSound() {
//         console.log(`${this.name} barks!`);
//     }
// }

// const dog = new Dog("Tommy", "German Shepherd");
// dog.makeSound();


// /*-----------------------------------------------------------
//   5. Polymorphism
//   - Same method name behaves differently based on object type
// ------------------------------------------------------------*/

// class Bird extends Animal {
//     makeSound() {
//         console.log(`${this.name} chirps!`);
//     }
// }

// const animals = [new Animal("Generic"), new Dog("Rocky"), new Bird("Mina")];
// animals.forEach(a => a.makeSound());


// /*-----------------------------------------------------------
//   6. Abstraction (no direct abstract keyword in JS)
//   - We simulate abstraction using base classes and throwing error
// ------------------------------------------------------------*/

// class Shape {
//     area() {
//         throw new Error("Method 'area()' must be implemented.");
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// const c1 = new Circle(5);
// console.log("Circle Area:", c1.area());


// /*-----------------------------------------------------------
//   7. Static Properties and Methods
//   - Belong to class itself, not instance
// ------------------------------------------------------------*/

// class MathUtil {
//     static PI = 3.14159;

//     static square(n) {
//         return n * n;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.square(5));


// /*-----------------------------------------------------------
//   8. 'this' keyword in classes
//   - Refers to the current object instance
// ------------------------------------------------------------*/

// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }
//     showBrand() {
//         console.log("Car brand is " + this.brand);
//     }
// }
// const car1 = new Car("Toyota");
// car1.showBrand();


// /*-----------------------------------------------------------
//   SUMMARY:
//   - OOP helps to organize code with reusability and readability.
//   - Always remember the 4 pillars: 
//     Encapsulation, Abstraction, Inheritance, Polymorphism.
// ------------------------------------------------------------*/
