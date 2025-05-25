/* Overall responsibility for the interactivity  of the webpage */
// The symbols `` are called backticks, not "back tacks." They are often used in programming and markdown formatting.

//? for basic output, we will use console.log();
console.log(`Arman Hossen`); // to see output , 
// right click on your web page , go to 
// - inspect
// then go to , - Console, you will see basic output
console.log("I am a student");


//! to create a alert pop up window
 window.alert(`this is an alart!`);
// window.alert(`hi bro don't panic!`);


//*to modify text content inside html document tag's inside text / html element, -
// 1.first i have to select that element by      document.getElementById("first_h1"), 
// 2.then modify that element/ set text by   .textContent = 'hi bro';
// document = document of my web page 
document.getElementById("first_h1").textContent = `hello world`; // now the h1 tag will show this hello world

document.getElementById("first_p").textContent =    `i like pizza`; // now the p tag will show this `i like pizza` - text

 








//this is a comment
/*
this
is 
a 
multiline 
comment
*/

