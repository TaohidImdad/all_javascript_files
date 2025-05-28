//add component in arrry

let orders=[
    {id:1, name:"Onion", qty:1,total:20},
    {id:2, name:"Potato", qty:1, total:40},
    {id:3, name:"Banana", qty:1,total:50},
];

// orders.push( {id:4, name:"Guava", qty:1, total:20});


function add(obj) {
    const exists = orders.some(a => a.id === obj.id);
  
    if (exists) {
      orders = orders.map(a => {
        if (a.id === obj.id) {
          return { ...a, qty: a.qty + 1 };
        }
        return a;
      });
    } else {
      orders.push(obj);
      orders = [...orders, obj]
    }
  }
  
// console.log(orders);








// orders= [...orders, {id:5, name:"Apple", total:25}];
// console.log(orders);

// delete
let id=2
let dele= orders.filter(a=>{ return  a.id != id});
console.log("delete",dele);

// update

// let update= orders.map( a =>{
//     if (a.id === id) {
//       return {id:id, name: "Pineapple", price:60};
//     }
//     return a;
// });

// console.log("update",update);


let person= {
    name:"hasib",
    age:50,
    address:{
        city:"Dhaka"
    }
}

let abc=["aman", "Rakib"]

person = {...person, address:{city:"Rajshahi"} }
console.log(person);
