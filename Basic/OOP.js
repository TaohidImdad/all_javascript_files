// 1. Classes and Constructor Functions
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
  
  // Creating an instance of the Person class
  const person1 = new Person('Alice', 30);
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  
  
  // 2. Inheritance (Extending Classes)
  class Employee extends Person {
    constructor(name, age, position) {
      super(name, age);  // Call the parent class constructor
      this.position = position;
    }
  
    // Overriding the greet method (Polymorphism)
    greet() {
      console.log(`Hello, my name is ${this.name}, I am a ${this.position}, and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the Employee class
  const employee1 = new Employee('Bob', 25, 'Developer');
  employee1.greet(); // Output: Hello, my name is Bob, I am a Developer, and I am 25 years old.
  
  
  // 3. Encapsulation (Private and Public Members)
  class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      let _balance = balance;  // Private variable
  
      // Public method to get balance
      this.getBalance = () => {
        return _balance;
      };
  
      // Public method to deposit money
      this.deposit = (amount) => {
        if (amount > 0) {
          _balance += amount;
        }
      };
  
      // Public method to withdraw money
      this.withdraw = (amount) => {
        if (amount > 0 && _balance >= amount) {
          _balance -= amount;
        } else {
          console.log('Insufficient balance or invalid amount');
        }
      };
    }
  }
  
  // Creating an instance of BankAccount
  const account1 = new BankAccount('John', 1000);
  account1.deposit(500);
  account1.withdraw(200);
  console.log(account1.getBalance()); // Output: 1300
  
  // 4. Abstraction (Hiding Complexity)
  class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    // Abstracting the complexity of starting the engine
    startEngine() {
      this._engineStart();
    }
  
    // Private method that won't be accessible outside
    _engineStart() {
      console.log(`The engine of ${this.model} (${this.year}) has started.`);
    }
  }
  
  const car1 = new Car('Tesla', 2022);
  car1.startEngine(); // Output: The engine of Tesla (2022) has started.
  
  
  // 5. Polymorphism (Method Overriding and Overloading)
  class Animal {
    speak() {
      console.log('Animal makes a sound');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Dog barks');
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log('Cat meows');
    }
  }
  
  // Creating instances and calling the overridden method
  const dog = new Dog();
  const cat = new Cat();
  
  dog.speak(); // Output: Dog barks
  cat.speak(); // Output: Cat meows
  
  
  // Using static methods
  console.log(MathOperations.add(10, 20)); // Output: 30
  console.log(MathOperations.multiply(5, 4)); // Output: 20
  
  