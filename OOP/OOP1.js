

// inheritace 

class Person {
  // Constructor function
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person1 = new Person("Hasan", 25);

console.log(person1.greet());


class Employee extends Person{
    constructor(name, age, designation){
       super(name, age);
       this.designation= designation;
    }
}

let employee1= new Employee("Kahaled", 24, "Manager");
console.log(employee1.greet());

// access modifire 
//1.public 2.private 3.protected

 /* 3. Encapsulation (Private Fields using #) */
  // class Car {
  //   #engineNumber;
  
  //   constructor(brand, engineNumber) {
  //     this.brand = brand;
  //     this.#engineNumber = engineNumber;
  //   }
  
  //   getEngineNumber() {
  //     return this.#engineNumber;
  //   }
  
  //   setEngineNumber(newNumber) {
  //     this.#engineNumber = newNumber;
  //   }
  // }

  // let car = new Car("Nishan", "b614");

  // console.log(car1.setEngineNumber("H31"));
  // console.log(car1.getEngineNumber());
  

//  // 4. Abstraction (Hiding Complexity)
//   class Car {
//     constructor(model, year) {
//       this.model = model;
//       this.year = year;
//     }
  
//     // Abstracting the complexity of starting the engine
//     startEngine() {
//       this._engineStart();
//     }
  
//     // Private method that won't be accessible outside
//     _engineStart() {
//       console.log(`The engine of ${this.model} (${this.year}) has started.`);
//     }
//   }
  
//   const car1 = new Car('Tesla', 2022);
//   console.log(car1.startEngine()); // Output: The engine of Tesla (2022) has started.
  
// 5. Polymorphism (Method Overriding and Overloading)
  // class Animal {
  //   sleep(){

  //   }
  //   eat(){

  //   }
  //   speak() {
  //     console.log('Animal makes a sound');
  //   }
  //   speak(sound) {
  //     console.log('Animal makes a sound');
  //   }
  // }
  
  // class Dog extends Animal {
  //   speak() {
  //     console.log('Dog barks');
  //   }
  // }
  
  // class Cat extends Animal {
  //   speak() {
  //     console.log('Cat meows');
  //   }
  // }
  
  // // Creating instances and calling the overridden method
  // const dog = new Dog();
  // const cat = new Cat();
  
  // dog.speak(); // Output: Dog barks
  // cat.speak(); // Output: Cat meows
  