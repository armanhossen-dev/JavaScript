// type conversion = change the data type of a value to another
                //   (string <-> number <-> boolean)

// after taking input form user , we can change the value's data type
let age = window.prompt(`bro how old are you?`); //even this looks like a number but it is string
///converting the string to number
//before type conversion the age's data type
console.log(`age =`,age); //22 now this is a number
console.log(`typeof age :`, typeof age);
age = Number(age);
console.log(`typeof age :`, typeof age);
console.log(`age =`,age); //22 now this is a number

/*
typeof age : string
typeof age : number
22
*/
let x = "pizza"; 
//lets convert string to number
x = Number(x);
console.log(`x`,x, typeof x); //NaN 'number', here NaN = not a number, then type is number

let y = "pizza"; 
y = String(y); // converting string to string
console.log(`y`,y,`=`,typeof y); //pizza = string

let z = "pizza"; 
z = Boolean(z);
// if a string is not empty then it will be always true while string to boolean conversion
console.log(z, `=`, typeof z);  //true '=' 'boolean'
console.log(`${z} = ${typeof z}`); //true = boolean

//lets do it for number(as string) -> Number, String, Boolan
let a1 = "0"; // it has assigned as string
let a2 = "0"; // it has assigned as string
let a3 = "0"; // it has assigned as string
console.log(`if variable assigned to "0" string`);
console.log(`a1`,a1, typeof a1); //0 string

a1 = Number(a1);
console.log(`a1`,a1 , typeof a1); //0 'number'

a2 = String(a2);
console.log(`a2`,a2 , typeof a2); //0 string

a3 = Boolean(a3);
console.log(`a3`,a3 , typeof a3); //true 'boolean'

// let do it for empty string
let b1 = "";
let b2 = "";
let b3 = "";
console.log(`if variable assigned to empty string`);
b1 = Number(b1);
b2 = String(b2);
b3 = Boolean(b3);

console.log(`b1`,b1, typeof b1); //b1 0 number
console.log(`b2`,b2, typeof b2); //b2  string
console.log(`b3`,b3, typeof b3); //b3 false boolean

// if the user dosen't give any input then we can check it by converting 
// that variables value to boolean and and see if false for string then the user dosen't gave input

let c1;
let c2;
let c3;
console.log(`if variable is undefined`);

c1 = Number(c1);
c2 = String(c2);
c3 = Boolean(c3);

console.log(`c1`,c1, typeof c1); //c1 NaN number
console.log(`c2`,c2, typeof c2); //c2 undefined string
console.log(`c3`,c3, typeof c3); //c3 false boolean