

console.log(document);

let addTask= document.getElementsByClassName("task");

console.log(addTask[0]);
addTask[0].addEventListener('click', (e)=>{
   e.preventDefault()
  
   let task= document.getElementById("new_task").value
   let newTask= document.createElement('li');
   newTask.className="shadow-sm list-group-item d-flex justify-content-between align-items-center rounded-2 mb-2";
   newTask.innerHTML= `
                            ${task}
                            <button type="button" class="btn-close remove" aria-label="Close"></button>
               `;
    console.log(newTask);

    newTask.querySelector('.remove').addEventListener('click',()=>{
         newTask.remove()
    })
    
  document.getElementById('Tasks').append(newTask);
  document.getElementById("new_task").value =""

});