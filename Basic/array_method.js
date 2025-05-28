// Important JavaScript Array Methods

let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// 1. push() - Adds elements to the end

// console.log(numbers);
// console.log(fruits);
// numbers.push(6);
// fruits.push("Pinapple");
// console.log(numbers);
// console.log(fruits);


// 2. pop() - Removes the last element

// console.log(numbers);
// console.log(fruits);
// numbers.pop();
// fruits.pop();
// console.log(numbers);
// console.log(fruits);

// 4. unshift() - Adds elements to the beginning

// console.log(numbers);
// console.log(fruits);


// numbers.unshift(0);
// fruits.unshift("Orenge");


// console.log(numbers);
// console.log(fruits);



// 3. shift() - Removes the first element

// console.log(numbers);
// console.log(fruits);


// numbers.shift();
// fruits.shift();


// console.log(numbers);
// console.log(fruits);


// 5. concat() - Merges two arrays

// console.log(numbers);
// console.log(fruits);

// let a = numbers.concat(fruits);
// let b = [...numbers, ...fruits]  //spread operator

// console.log(b);
// console.log(fruits);

// 6. slice() - Extracts a section of an array

// let a = numbers.slice(2,4);
// let b = fruits.slice(1,3);
// console.log(b);
// console.log(fruits);


// 7. splice() - Adds/Removes/replace elements in place

// let b = fruits.splice(3,0, "red apple", "orange");
// console.log(b);
// console.log(fruits);

// 8. indexOf() - Finds the  index of an element first element

// console.log(fruits);
// let b = fruits.indexOf("Apple");
// console.log(b);

// 9. includes() - Checks if an array contains an element


// console.log(fruits);
// let b = fruits.includes("PinApple");
// console.log(b);

// 10. forEach() - Iterates over an array

// fruits.forEach(function(element){
//   console.log(element);
  
// });

// for(let i = 0 ; i< fruits.length ; i++){
//    console.log(fruits[i]); 
// }



fruits.forEach((element, index) =>{
    console.log(element)
} 

);

// 11. map() - Creates a new array by transforming each element

// let fruits2= fruits.map((fruit)=>{
//    return ('US Improted' +' '+ fruit)
// })


// console.log(fruits2);
// console.log(fruits);

let sales= [
    {id:2, name: "Kamal" , age:30, total:1000},
    {id:3, name: "Masuma" , age:20, total:1500},
    {id:4, name: "Khaled" , age:6, total:50},
    {id:1, name: "Masud" , age:25, total:2000},
    {id:5, name: "Rahman" , age:40, total:500},
    {id:6, name: "Jamal" , age:60, total:800},
]




// function maxtotal(sales){
//     var max= {total:0};
//     sales.map((s)=>{
//          max =  s.total > max.total ? s : max
//     })
//     return max;
// }


// function maxtotal2(sales){
//     var max= {total:0};
//     var sumTotal= 0;
//     sales.map((s)=>{
//          max =  s.total > max.total ? s : max
//          sumTotal+=s.total;
//     })
//     return {"Max":max , "Total":sumTotal} ;
// }

// console.log(maxtotal2(sales))


// 12. filter() - Filters elements based on a condition

// const num2 =numbers.filter((num)=>{
//    return num > 2
// });

// console.log(num2);
// console.log(numbers);



const person= (sales)=>{
    var total =0
    sales.filter((s)=>{
        if (s.age < 30){
          total+= s.total;
        }
    })
    return total 
} 

 console.log(person(sales))
// 14. find() - Finds the first element that matches a condition
// const num3 = numbers.find((num)=>{
//      return num > 2
// })



// console.log(num3)

// 13. reduce() - Reduces array to a single value

// const result= numbers.reduce((acc , num)=>{ return acc + num},0);
// console.log(result)

// var add = 0;
// for (let i = 0; i < numbers.length; i++) {
//    add += numbers[i];
    
// }

// 16. sort() - Sorts an array
// 17. reverse() - Reverses an array

// const sort=  numbers.sort().reverse();
// const fr=  fruits.sort().reverse();
// console.log(sort)
// console.log(fr);

// 18. join() - Converts array to a string
// const fr= fruits.join().split(",");
// console.log(fr);


// 19. some() - Checks if any element meets a condition

// const fr= fruits.some((fr)=> fr === "Bananana" );
// console.log(fr);

// const nm1 = numbers.some((n)=> n > 2)
// console.log(nm1);
// 20. every() - Checks if all elements meet a condition
// const nm = numbers.every((n)=> n > 2)
// console.log(nm);


