
// selectors : class(.), Id(#), tag(p)


// Selecting Elements
// console.log(document.getElementById("main-heading"));
// console.log(document.getElementsByName("username"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByClassName("box"));
//console.log(document.querySelector(".box"));
// console.log(document.querySelectorAll(".box"));

// // Traversing Elements

//  const child = document.getElementById("child");
// console.log("Parent:", child.parentElement);
// console.log("Children:", document.getElementById("list").children);
//  console.log("Next Sibling:", child.nextElementSibling);
// console.log("Previous Sibling:", child.previousElementSibling);

// let ch=document.getElementById("list").children[1].style.color='red' ;
//  Array.from(ch).forEach(element => {
//     element.style.color='green'
//     element.style.fontWeight='bold'
//  });


// Manipulating HTML Elements
// const newDiv = document.createElement("div");
// newDiv.textContent = "I am new!";
// document.body.appendChild(newDiv);

const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem);

// document.getElementById("main-heading").textContent = "Updated Heading";
// document.getElementById("list").innerHTML += "<li>Item 5</li>";
// document.getElementById('parent').innerText='This is parent'

// let childElement= document.createElement('div')
// childElement.innerText= "I am child";
// document.getElementById('parent').innerHTML += '<div>I am child </div>'


// list.after(document.createElement("hr"));
// list.append("Appended text");
// list.prepend("Prepended text");

// list.insertAdjacentHTML("beforeend", "<li>Item 6</li>");

const replacedItem = document.querySelector(".item");
const newElement = document.createElement("li");
newElement.textContent = "Replaced Item";
list.replaceChild(newElement, replacedItem);

const cloned = newElement.cloneNode(true);
list.appendChild(cloned);

list.removeChild(list.children[0]);

const item3 = document.querySelectorAll(".item")[1];
list.insertBefore(cloned, item3);

// // // Attribute Methods
// const heading = document.getElementById("main-heading");
// console.log(heading.getAttribute("id"));
// heading.setAttribute("data-role", "header");
// console.log(heading.hasAttribute("data-role"));
// heading.removeAttribute("data-role");

// // Manipulating Styles
// heading.style.color = "blue";
// heading.style.backgroundColor = "lightgray";
// heading.style.fontSize = "24px";
// heading.style.cssText = "color: green; font-size: 30px;";

// const styles = getComputedStyle(heading);
// console.log("Computed color:", styles.color);


const heading = document.getElementById("main-heading");
console.log("className:", heading.className);
heading.classList.add("highlight");
heading.classList.remove('highlight')
// heading.classList.toggle("highlight");
// console.log(heading);

// // JavaScript Events
// const btn= document.getElementById("event-btn");
// console.log(btn);

document.getElementById("event-btn").addEventListener("click", function (event) {
  alert("Button Clicked! Event type: " + event.type);
});

const handler = () => {
    document.getElementById("event-btn").style.backgroundColor='red'
};
const handler2 = () => {
    document.getElementById("event-btn").style.backgroundColor='white'
};

document.getElementById("event-btn").addEventListener("mouseover", handler);
// document.getElementById("event-btn").addEventListener("mouseleave", handler2);


setTimeout(() => {
  document.getElementById("event-btn").style.backgroundColor='white';
  console.log("Mouseover event removed.");
}, 5000);

setInterval(() => {
    document.body.style.backgroundColor='red'
}, 1000);
setInterval(() => {
    document.body.style.backgroundColor='green'
}, 2000);

document.getElementById("add-btn").onclick = () => {
  const el = document.createElement("p");
  el.textContent = "New Paragraph";
  document.body.appendChild(el);
};

document.getElementById("style-btn").addEventListener("click", () => {
  heading.style.border = "2px dashed red";
});

// Event Bubbling Example
document.getElementById("list").addEventListener("click", (e) => {
  console.log(e.target.textContent);
}, false);
