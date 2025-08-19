
/*-----------------------------------------------------------
  1. What is Prototype?
  - Every JavaScript object has a hidden internal link 
    called [[Prototype]] (in modern JS accessed by __proto__).
  - Functions in JS automatically get a "prototype" property.
------------------------------------------------------------*/

const obj = {};
console.log(obj.__proto__);  // base prototype -> Object.prototype


/*-----------------------------------------------------------
  2. Prototype Chain
  - If a property/method is not found in object, 
    JavaScript looks into its prototype chain.
------------------------------------------------------------*/

const animal = {
    eats: true
};
const rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;  // set prototype
console.log(rabbit.jumps);  // true
console.log(rabbit.eats);   // inherited from animal


/*-----------------------------------------------------------
  3. Function Prototype vs Object __proto__
  - All functions have a property named "prototype".
  - Objects created with `new` link their __proto__ to that prototype.
------------------------------------------------------------*/

function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.name);
};

const p1 = new Person("Rasel");
p1.sayHello(); // works, because __proto__ links to Person.prototype


/*-----------------------------------------------------------
  4. Adding methods using prototype
------------------------------------------------------------*/

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.study = function() {
    console.log(this.name + " is studying.");
};

const s1 = new Student("Imran", 22);
s1.study();


/*-----------------------------------------------------------
  5. Overriding Prototype Methods
------------------------------------------------------------*/

Student.prototype.study = function() {
    console.log(this.name + " is studying very hard!");
};
s1.study();  // updated version


/*-----------------------------------------------------------
  6. Built-in Prototypes
------------------------------------------------------------*/

// Array prototype
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);  // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

// String prototype
const str = "hello";
console.log(str.__proto__ === String.prototype); // true

// Adding custom method to Array prototype
Array.prototype.first = function() {
    return this[0];
};
console.log([10, 20, 30].first());  // 10


/*-----------------------------------------------------------
  7. Custom Inheritance using Prototype
------------------------------------------------------------*/

function Animal(name) {
    this.name = name;
}
Animal.prototype.makeSound = function() {
    console.log(this.name + " makes a sound.");
};

function Dog(name, breed) {
    Animal.call(this, name); // call parent constructor
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // inherit
Dog.prototype.constructor = Dog; // reset constructor

Dog.prototype.makeSound = function() {
    console.log(this.name + " barks!");
};

const dog = new Dog("Tommy", "Labrador");
dog.makeSound();


/*-----------------------------------------------------------
  8. Difference: prototype vs __proto__
  - prototype: a property of functions, used to set inheritance.
  - __proto__: a hidden property of objects, points to its parent.
------------------------------------------------------------*/

function Teacher(name) {
    this.name = name;
}
console.log(Teacher.prototype); // object with constructor property
const t1 = new Teacher("Mamun");
console.log(t1.__proto__ === Teacher.prototype); // true


/*-----------------------------------------------------------
  9. ES6 Classes vs Prototypes
  - Classes are just syntactic sugar over prototypes
------------------------------------------------------------*/

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(this.brand + " is driving...");
    }
}
const car1 = new Car("Toyota");
car1.drive();

// Internally same as
function CarOld(brand) {
    this.brand = brand;
}
CarOld.prototype.drive = function() {
    console.log(this.brand + " is driving...");
};


/***********************************************************
 SUMMARY:
 - Every object has __proto__ (its parent link).
 - Functions have prototype (used when creating objects).
 - Prototype chain allows inheritance and code reuse.
 - Built-in objects (Array, String, Object) also use prototypes.
 - ES6 classes are just syntactic sugar over prototype-based OOP.
************************************************************/
