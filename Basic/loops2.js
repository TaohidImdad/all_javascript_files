
// 1. FOR loop — when you know how many times to loop
for (let i = 1; i <= 5; i++) {
    console.log("FOR loop count:", i);
}

// 2. WHILE loop — when you don't know how many times
let count = 1;
while (count <= 5) {
    console.log("WHILE loop count:", count);
    count++;
}

let password;
while (password !== "secret") {
    password = prompt("Enter password:");
}


// 3. DO...WHILE loop — runs at least once
let number = 6;
do {
    console.log("DO...WHILE number:", number);
    number++;
} while (number <= 5);


let again;
do {
    again = confirm("Do you want to try again?");
} while (again);


// 4. FOR...OF loop — loop through arrays or strings

const fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


for (let char of "Hello") {
    console.log("Char:", char);
}

// 5. FOR...IN loop — loop through object keys

const student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
    console.log(key + ":", student[key]);
}

// 6. BREAK — stop loop early

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("BREAK at:", i);
        break;
    }
    console.log("i:", i);
}

// 7. CONTINUE — skip one iteration

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("CONTINUE at:", i);
        continue;
    }
    console.log("i:", i);
}

// Summary: Best Loop Usage
// FOR: Known times (e.g., 1 to 10)
// WHILE: Unknown times (e.g., user input)
// DO...WHILE: Must run once (e.g., menu)
// FOR...OF: Arrays/Strings (e.g., items)
// FOR...IN: Objects (e.g., key-value)
