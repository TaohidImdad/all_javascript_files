// let name= new String("Hafiz");
// console.log(name)


let list=[
   {id:1, name:"Banana", price:10, qty:1},
   {id:2, name:"Apple", price:300, qty:1},
   {id:3, name:"Orange", price:25, qty:1},
];

// array read 

 list.forEach((item , index)=>{
    // console.log(item.name);
    // console.log(item.price);
    
 });

// add element into array 
let new_item=  {id:4, name:"Pinapple", price:50, qty:1}
list.push(new_item)
// let newArray= [...list , new_item];

// delete array element
let arrayDel= list.filter((item, index )=>{
   return item.id != 2
});

// update array 
let updatearrya= list.map((item,index)=>{
    if(item.id == 1){
      return  {...item, qty:12}
    }
    return item
})

console.log(updatearrya);


