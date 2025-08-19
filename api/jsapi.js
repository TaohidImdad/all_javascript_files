/***********************************************************
   JavaScript API Cheat Sheet with Examples
   Author: Your Name
************************************************************/

/*-----------------------------------------------------------
  1. Console API
------------------------------------------------------------*/
console.log("Normal log");       // Normal log
console.warn("This is a warning"); // Warning
console.error("This is an error"); // Error
console.table([{id:1, name:"Imran"}, {id:2, name:"Rasel"}]); // Table view


/*-----------------------------------------------------------
  2. Timer API
------------------------------------------------------------*/
setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

let count = 0;
const interval = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if(count === 3) clearInterval(interval);
}, 1000);


/*-----------------------------------------------------------
  3. Math API
------------------------------------------------------------*/
console.log(Math.PI);             // 3.14159
console.log(Math.sqrt(16));       // 4
console.log(Math.floor(4.7));     // 4
console.log(Math.random());       // Random number 0–1


/*-----------------------------------------------------------
  4. Date API
------------------------------------------------------------*/
const now = new Date();
console.log(now.toDateString());  // Tue Aug 19 2025
console.log(now.getFullYear());   // 2025
console.log(now.getMonth() + 1);  // Month (1-12)


/*-----------------------------------------------------------
  5. JSON API
------------------------------------------------------------*/
const user = {name: "Imran", age: 25};
const str = JSON.stringify(user);  // Convert object → string
console.log(str);
const obj = JSON.parse(str);       // Convert string → object
console.log(obj);


/*-----------------------------------------------------------
  6. String API
------------------------------------------------------------*/
let text = "Hello JavaScript";
console.log(text.length);           // 16
console.log(text.toUpperCase());    // HELLO JAVASCRIPT
console.log(text.includes("Java")); // true
console.log(text.split(" "));       // ["Hello", "JavaScript"]


/*-----------------------------------------------------------
  7. Array API
------------------------------------------------------------*/
const arr = [10, 20, 30];
arr.push(40);  // add
console.log(arr);  // [10,20,30,40]

arr.pop(); // remove last
console.log(arr); // [10,20,30]

console.log(arr.map(x => x * 2)); // [20,40,60]
console.log(arr.filter(x => x > 15)); // [20,30]


/*-----------------------------------------------------------
  8. Object API
------------------------------------------------------------*/
const person = {name: "Hasan", age: 30};
console.log(Object.keys(person));   // ["name","age"]
console.log(Object.values(person)); // ["Hasan",30]
console.log(Object.entries(person));// [["name","Hasan"],["age",30]]


/*-----------------------------------------------------------
  9. DOM API (Browser only)
------------------------------------------------------------*/
// document.getElementById("myId")
// document.querySelector(".myClass")
// element.innerHTML = "Hello"
// element.addEventListener("click", () => { ... });


/*-----------------------------------------------------------
  10. Fetch API (Browser & Node with fetch)
------------------------------------------------------------*/
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


/*-----------------------------------------------------------
  11. Local Storage API (Browser only)
------------------------------------------------------------*/
// Save data
localStorage.setItem("username", "Imran");
// Get data
console.log(localStorage.getItem("username")); // "Imran"
// Remove data
localStorage.removeItem("username");


/*-----------------------------------------------------------
  12. Geolocation API (Browser only)
------------------------------------------------------------*/
// navigator.geolocation.getCurrentPosition(
//     (pos) => console.log(pos.coords.latitude, pos.coords.longitude),
//     (err) => console.error(err)
// );


/*-----------------------------------------------------------
  13. Clipboard API (Browser only)
------------------------------------------------------------*/
// navigator.clipboard.writeText("Hello World");
// navigator.clipboard.readText().then(text => console.log(text));


/*-----------------------------------------------------------
  SUMMARY:
  - Core JS APIs: Console, Timer, Math, Date, JSON, String, Array, Object
  - Browser APIs: DOM, Fetch, LocalStorage, Geolocation, Clipboard
------------------------------------------------------------*/
