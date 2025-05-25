// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        example  11 = x + 5;
let student = 40;

// if new student nubmer changes
// student = student + 1;
// student = student - 1;
// student = student * 1;
// student = student / 1;

/// exponens operator is double star, used as power , 
// student = student  ** 2; // 40 -> 40² = 1600
// student = student  ** 3; 

// student = student % 2;
// stores the remainder when student is divided by 2 (0 for even, 1 for odd)
// console.log(student); // 0

//* we will use - augmented assignment operators
student  += 1;
console.log(student); // 41

student -= 2;
console.log(student); //39

student *= 2;
console.log(student); //78

student /= 2;
console.log(student); //39

student **= 3; // power 3 
console.log(student); //59319

student %= 2;
console.log(student); // 1, stores the remainder when student is divided by 2 (0 for even, 1 for odd)

student++;
console.log(student); 

student--;
console.log(student); 

/*
    Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & substraction

*/

let result = 1 + 2 * 3 + 4 ** 2;
/*
=> 1 + 2 * 3 + [4 ** 2]
=> 1 + [2 * 3] + 16
=> [1 + 6 + 16] = 23
*/
console.log(result); //23


let r = 12 % 5 + 8 / 2;
/*
=>   [12 % 5] + [8 / 2];  // 12 divided by 5 remain 2 
=>    2       +    4   =   6, 
*/
console.log(r); //6

let a = 6/2 ** (2+5);
/*
=>  6/2 ** [(2+5)]
=>  6/[2 ** 7]
=>  6 / 128
=  0.046875  
*/
console.log(a);