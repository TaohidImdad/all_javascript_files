/***********************************************************
   JavaScript: call(), apply(), bind()
   Author: Your Name
************************************************************/

/*-----------------------------------------------------------
  1. What are call(), apply(), and bind()?
  - They are methods available on all functions in JS.
  - They allow us to explicitly set the value of `this`.
------------------------------------------------------------*/

const person = {
    name: "Imran",
    greet: function(city, country) {
        console.log(`Hello, my name is ${this.name}, I live in ${city}, ${country}.`);
    }
};

const person2 = { name: "Rasel" };


/*-----------------------------------------------------------
  2. call()
  - Immediately invokes the function with a given `this` value
  - Arguments are passed one by one
------------------------------------------------------------*/

person.greet.call(person2, "Dhaka", "Bangladesh");
// Output: Hello, my name is Rasel, I live in Dhaka, Bangladesh.


/*-----------------------------------------------------------
  3. apply()
  - Similar to call(), but arguments are passed as an array
------------------------------------------------------------*/

person.greet.apply(person2, ["Chittagong", "Bangladesh"]);
// Output: Hello, my name is Rasel, I live in Chittagong, Bangladesh.


/*-----------------------------------------------------------
  4. bind()
  - Returns a new function with `this` permanently set
  - Does NOT execute immediately
------------------------------------------------------------*/

const boundGreet = person.greet.bind(person2, "Sylhet", "Bangladesh");

boundGreet();
// Output: Hello, my name is Rasel, I live in Sylhet, Bangladesh.


/*-----------------------------------------------------------
  5. Real-Life Example: setTimeout
  - Problem: `this` inside setTimeout loses context
------------------------------------------------------------*/

const user = {
    name: "Hasan",
    sayName: function() {
        setTimeout(function() {
            console.log("My name is " + this.name); // ❌ undefined
        }, 1000);
    }
};
user.sayName();

/* Fix with bind */
const user2 = {
    name: "Hasan",
    sayName: function() {
        setTimeout(function() {
            console.log("My name is " + this.name); // ✅ works
        }.bind(this), 1000);
    }
};
user2.sayName();


/*-----------------------------------------------------------
  6. Quick Summary
  - call(thisArg, arg1, arg2, ...) → calls immediately
  - apply(thisArg, [argsArray]) → calls immediately
  - bind(thisArg, arg1, arg2, ...) → returns a new function
------------------------------------------------------------*/
