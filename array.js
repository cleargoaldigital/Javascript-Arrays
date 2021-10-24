
// Arrays 1
// Let's start off with some basic array practice. In this task we'd like you to create an array of three items, 
// stored inside a variable called myArray. The items can be anything you want — how about your favorite foods or bands?

// Next, modify the first two items in the array using simple bracket notation and assignment.
// Then add a new item to the beginning of the array.



// Add your code here

let myArray = ['laptop', ' modem', ' router'];

let firstTwo = myArray[0] + myArray[1];

let newArray = `${(firstTwo)}`;

myArray.push(' charger');


const section = document.querySelector('section')
// Don't edit the code below here!

section.innerHTML = ' ';
let newText = document.createElement('p');
newText.textContent = `Array: ${ myArray }`;

let newText2 = document.createElement('p');
newText2.textContent = `New Array: ${ newArray }`;

section.appendChild(newText);
section.appendChild(newText2);