const person = require('./person.js')

console.log('Hello World');

// comments added using these slash

/*
Java script is using let, const and var data type for storing values
*/

let a = 2;
console.log(a);
console.log(typeof(a));


let b = 2333.88;
console.log(typeof(b));

let c ="stringvalue";
console.log(typeof(c));

let required = true;
console.log(typeof(required));

// redclaring with let keyword is not allowed // however allowed with var keyword
// Again if we want to use let only then we can declare it once and use it at other location. 
 c=a+b;
console.log(c);

console.log(!required);

let personObject = new person('testing', 'rest')
console.log(personObject.fullName());




