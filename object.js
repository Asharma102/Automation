// object is collection of properties.

let person = {
firstName : 'jim',
lastName : 'tom'
}

console.log(person.firstName);
console.log(person['firstName']);
person.firstName = 'Rakesh'
console.log(person.firstName);
person.gender = 'male'
console.log(person);
delete person.gender;
console.log(person);

// print all the values of java script object
for (let key in person)
{
    console.log(person[key])
} 