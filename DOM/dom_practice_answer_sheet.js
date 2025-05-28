


// 1. Change #mainHeading text
document.getElementById('mainHeading').innerText = "Welcome to DOM World!";

// 2. Change all buttons' background color
document.querySelectorAll('button').forEach(btn => {
  btn.style.backgroundColor = 'green';
});

// 3. Change paragraph font size
document.querySelector('p').style.fontSize = '20px';

// 4. Set inner HTML of #contentBox
document.getElementById('contentBox').innerHTML = '<strong>New dynamic content!</strong>';

// 5. Create and append new <li>
const newItem = document.createElement('li');
newItem.innerText = 'New Item';
document.getElementById('itemList').appendChild(newItem);

// 6. Create and append new image
const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://via.placeholder.com/150');
document.getElementById('imageHolder').appendChild(newImg);

// 7. Remove last <li>
const itemList = document.getElementById('itemList');
if (itemList.lastElementChild) {
  itemList.removeChild(itemList.lastElementChild);
}

// 8. Remove #removeMe on button click
document.getElementById('removeButton').addEventListener('click', () => {
  document.getElementById('removeMe').remove();
});

// 9. Change href of #learnMoreLink
document.getElementById('learnMoreLink').setAttribute(
  'href',
  'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
);

// 10. Add highlight class to #specialBox
document.getElementById('highlightButton').addEventListener('click', () => {
  document.getElementById('specialBox').classList.add('highlight');
});

// 11. Toggle active class
document.getElementById('toggleButton').addEventListener('click', () => {
  document.getElementById('toggleDiv').classList.toggle('active');
});

// 12. Alert on button click
document.getElementById('alertButton').addEventListener('click', () => {
  alert('Button clicked successfully!');
});

// 13. Change background color on hover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'yellow';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = '';
});

// 14. Show input value on keypress
document.getElementById('usernameInput').addEventListener('keyup', () => {
  const value = document.getElementById('usernameInput').value;
  document.getElementById('displayUsername').innerText = value;
});

// 15. Change page title after 3 seconds
setTimeout(() => {
  document.title = "Ready to Start!";
}, 3000);

// 16. Scroll to top on button click
document.getElementById('scrollTopButton').addEventListener('click', () => {
  window.scrollTo(0, 0);
});
