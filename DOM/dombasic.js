// ========================================
// DOM BASICS - Important document functions
// ========================================

// 1. Select Elements

// Select element by ID
const title = document.getElementById('hello');
const tittleClass= document.getElementsByClassName('text')
 


// // Select elements by class name (returns HTMLCollection)
//  const items = document.getElementsByClassName('item');

// // Select elements by tag name (returns HTMLCollection)
const allParagraphs = document.getElementsByTagName('p');
allParagraphs[0].innerHTML="<h1>Hasan Mahmud</h1>"
allParagraphs[0].innerText="<h1>Hasan Mahmud</h1>"
allParagraphs[0].style.fontSize='20px'
allParagraphs[0].style.color='green'
console.log(allParagraphs[0].innerHTML);



// // Select first element that matches a CSS selector
 const firstButton = document.querySelector('.queryS');
 console.log(firstButton.nextSibling.nextSibling);
 


// // Select all elements that match a CSS selector (returns NodeList)
//  const allButtons = document.querySelectorAll('.queryS');

// console.log(allButtons);
// // 2. Read or Change Content

// // Read text content
// const text = title.innerText;

// // Change text content
// title.innerText = 'Updated Title';

// // Read HTML content
// const htmlContent = title.innerHTML;

// // Change HTML content
// title.innerHTML = '<span style="color: red;">Red Title</span>';


// // 3. Read or Change Attributes

// // Get attribute
 const imgSrc = document.getElementById('myImage').getAttribute('src');

// // Set attribute
 document.getElementById('myImage').setAttribute('src', 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww');

// // Remove attribute
 document.getElementById('myImage').removeAttribute('width');


// // 4. Style Elements

// // Inline styling using style property
// title.style.color = 'blue';
// title.style.fontSize = '24px';

// // Multiple styles can be assigned using cssText
// title.style.cssText = "color: green; background-color: yellow; font-weight: bold;";


// // 5. Create, Add, and Remove Elements

// // Create a new element
// const newParagraph = document.createElement('p');
// newParagraph.innerText = 'This is a new paragraph.';

// // Add the new element to the body or any container
// document.body.appendChild(newParagraph);

// // Insert before another element
// const container = document.getElementById('container');
// const referenceNode = document.getElementById('refItem');
// container.insertBefore(newParagraph, referenceNode);

// // Remove an element
// const oldElement = document.getElementById('oldElement');
// oldElement.remove();

// // Clone an element (deep clone includes children)
// const clonedButton = firstButton.cloneNode(true);
// document.body.appendChild(clonedButton);


// // 6. Events

// // Add event listener
// firstButton.addEventListener('click', function() {
//   alert('Button was clicked!');
// });

// // Remove event listener
// function handleClick() {
//   alert('Another handler!');
// }
// firstButton.addEventListener('click', handleClick);
// firstButton.removeEventListener('click', handleClick);


// // 7. Class Manipulation

// const box = document.getElementById('box');

// // Add a class
// box.classList.add('active');

// // Remove a class
// box.classList.remove('active');

// // Toggle a class (add if not present, remove if present)
// box.classList.toggle('active');

// // Check if element has a class
// const hasActiveClass = box.classList.contains('active');


// // 8. Form Elements

// const inputField = document.getElementById('nameInput');

// // Get input value
// const inputValue = inputField.value;

// // Set input value
// inputField.value = 'John Doe';

// // Focus an input
// inputField.focus();

// // Clear an input
// inputField.value = '';


// // 9. Page Information

// // Get page title
// const pageTitle = document.title;

// // Set page title
// document.title = "New Page Title";

// // Get URL
// const url = document.URL;

// // Get domain
// const domain = document.domain;


// // 10. Scroll and Dimensions

// // Scroll to top
// window.scrollTo(0, 0);

// // Get viewport width and height
// const viewportWidth = window.innerWidth;
// const viewportHeight = window.innerHeight;


// // 11. Timing Events (

// // Set timeout
// setTimeout(() => {
//   console.log('Executed after 2 seconds');
// }, 2000);

// // Set interval
// const intervalID = setInterval(() => {
//   console.log('Executed every 1 second');
// }, 1000);

// // Clear interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);


// ========================================
// End of DOM Basics
// ========================================


