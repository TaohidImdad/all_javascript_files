
// save
// localStorage.setItem()

// to read data
// localStorage.getItem()

// delete item
// localStorage.removeItem()

// delete all items
// localStorage.clear()

// localStorage.setItem('name', "Mahmud Kabir");
// localStorage.setItem('name2', "Hasibul Hasan");

// let name = localStorage.getItem('name');
// let name2 = localStorage.getItem('name2');

// document.getElementById('nameDisplay').innerText= name;
// document.getElementById('nameDisplay2').innerText= name2;

//  localStorage.removeItem('name');
//  localStorage.clear();

// console.log(name);
// console.log(name2);


// let items= [
//   {id:1, name:"Banana", price:10, qty:1},
//   {id:2, name:"Pinapple", price:100, qty:1},
//   {id:2, name:"Orange", price:300, qty:1},
// ];

// localStorage.setItem('cart', JSON.stringify(items));


// let getItems= JSON.parse(localStorage.getItem('cart')) ;

// console.log(typeof getItems);

// getItems.forEach(element => {
//     console.log(element);
    
// });

// console.log(getItems);


// fetch fucntion



//  fetch('https://dummyjson.com/todogjhj')
// .then(res=> res.json())
// .then(data=> {
//     console.log(data)

//  let liList= '';
// data.todos.forEach(task =>{
//     liList+= `<li>${task.todo}</li>`;
// })
// let printTasks= document.getElementById('TaskList');
// printTasks.innerHTML=liList

// })
// .catch(erro=> console.log(erro))


// promise


// let promise= new Promise( (resolve , reject)=>{
//     let getData= false;

//     if(getData){
//         resolve('Ok Done');
//     }else{
//         reject('NO Data Found')
//     }
// })

// promise
// .then(res=> alert(res))
// .catch(err=> alert(err))