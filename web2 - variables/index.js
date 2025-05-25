//veriable = a container that stores a value.
//           behaves as if it were the value it contains.


//1. declaration    let x;
//2. assignment     x = 100;

// to see the js output in the console i have to add js in html script src 

let x;
x = 100;

let y = 101;

console.log(x); //100
console.log(`x =`,x);  //x = 100
console.log(y); 
console.log(x+y); // sum will be output 
console.log(`hello world`);

let age  = 22;
let price = 10.99;
console.log(age, price); //22 10.99

let gpa = 3.40;
console.log(gpa);

//to see the type of variable
console.log(`x =`,x);  //x = 100
console.log(`typeof x = `, typeof x );

//using variable in string output by usingg ${} , inside {} i have to write the variable name,,, this is called - ${}  = place holder 
// console.log(`you are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is : ${gpa}`);


console.log(`you are ${age} years old`);
console.log(`typeof age = `, typeof age );
console.log(`\n`); // creates a new line, just console.log(); doesn't creates newline!

console.log(`The price is $${price}`);
console.log(`typeof price = `, typeof price );
console.log(`\n`);

console.log(`Your gpa is : ${gpa}`);
console.log(`typeof gpa = `, typeof gpa );
console.log(`\n`);


/*
"" and '' are used for normal strings.
` ` (backticks) are template literals, used when you want to include expressions like ${} or write multi-line strings.
*/
//let name = "Arman Hossen"; 
//? console.log(name); //Arman Hossen, i have to use different variable name , like userName

// ⚠️ About the name Warning:
// and there is an error 'name' is deprecated. showing in vs code error
// This warning is likely because name is a global property in browsers, 
// referring to window.name. So re-declaring let name = ... might show a warning in some environments
let userName = "Arman Hossen"; 
console.log(`typeof name = `, typeof userName); //typeof name =  string
//
let favoriteFood = "Kacci";
let userEmail = "armanhosen124@gmail.com";

console.log(`Your name is ${userName}!`);   //Your name is Arman Hossen!
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${userEmail}`); 


// Boolean 
let online = true;
console.log(`online is a `,typeof online, `variable`); //online is a  boolean variable
console.log(`${userName} is online : ${online}`); //Arman Hossen is online : true
online = false;
console.log(`${userName} is online : ${online}`); //Arman Hossen is online : false

let forSale = true; // false
console.log(`Is this car for sale: ${forSale}`);

let isStudent = true;
console.log(`Enrolled : ${isStudent}`);


//! lets show variables in webpage

let fullName = "Arman Hossen";
let userAge = 22;
// let isStudent = true;

// now i will go to html and add some html eliments
//lets change the text content of an html eliment
document.getElementById("p1").textContent = fullName;
// document -> web page
//geting element by its id -> any tag with id that i am calling
//in "" i will write the id
// .textContent to change the text in side the tag

document.getElementById("p2").textContent = userAge;
document.getElementById("p3").textContent = isStudent;


// lets display full name by ` ` (backticks) are template literals
document.getElementById("p4").textContent =    `Your name is ${fullName}`;
document.getElementById("p5").textContent =    `Your age is ${userAge}`;
document.getElementById("p6").textContent =    `Enrolled : ${isStudent}`;


/// strings, numbers, boolean