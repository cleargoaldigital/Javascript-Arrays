
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


// Arrays 2

// Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called secondArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.

// Add your code here

let myString = 'Kuta+Gbongan+Osogbo+Lagos+Ilesha+Ilorin+Ibadan+Ode-Omu+Modakeke';

let secondArray = myString.split('+');

let arrayLength = secondArray.length;

let lastItem = secondArray[8];


const newList = document.querySelector('.newarray') 
// Don't edit the code below here!

newList.innerHTML = ' ';
let line1 = document.createElement('p');
line1.textContent = `Converted string: ${ secondArray }`;

let line2 = document.createElement('p');
line2.textContent = `The length of the array is ${ arrayLength }.`;

let line3 = document.createElement('p');
line3.textContent = `The last item in the array is: "${ lastItem }".`;

newList.appendChild(line1);
newList.appendChild(line2);
newList.appendChild(line3);


// Arrays 3
// For this final array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0).
// Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-".
    
let thirdArray = [ "Taofeek", "Nurein", "Raphael", "Oluseyi", "Adewale", "Alani", "ramotallah", "Johnson", "Ibrahim", "Caleb" ];

// Add your code here

thirdArray.pop();

thirdArray.push('Egbetola', 'Olubunmi');
thirdArray;

for (let i = 0; i < thirdArray.length; i++) {

    let arrayIndex = thirdArray[i] + ' '+ thirdArray.indexOf(thirdArray[i]);

    let newString = arrayIndex.replace(' ', '-');

    console.log(newString);

    const thirdList = document.querySelector('.array');
    // Don't edit the code below here!

    thirdList.innerHTML = ' ';

    let line4 = document.createElement('p');
    line4.textContent = newString;

    let line5 = document.createElement('li');
    line5.textContent = arrayIndex;

    thirdList.appendChild(line4);
    thirdList.appendChild(line5);

}

let nextString = thirdArray.join('-');
console.log(nextString);


//  sorting

const points = [40, 100, 1, 5, 78, 25, 119, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}