                         // Arrays
//Declaration

let marks = [10,22,33,44,56,67];
console.log(marks);

// update an array

marks[3] = 39;
console.log(marks);

// calculate the length of an array

console.log(marks.length);

// add a new array at the end

marks.push(47)

// remove an array at the end

marks.pop();

// add a new array at the beginning

marks.unshift(90);

console.log(marks);

// find out the index of given array

console.log(marks.indexOf(90));

// search number in an array

console.log(marks.includes(300));


// if you want to break and make the sub array of your choice

let marksArray = [10,22,33,44,56,67];
subArray = marksArray.slice(2,5);

console.log(subArray);

// with for loop to print all the values in array

for (var i=0; i<=marksArray.length; i++){
    console.log(marksArray[i]);
}

// want to add all the elements of an array

var sum = 0;
for (let i=0; i<marksArray.length; i++){
    sum = sum + marksArray[i];
    }

    console.log(sum);

 // want to add all the elements of an array with reduce filter
 
let total= marksArray.reduce((sum, mark)=>sum+mark,0);
 console.log(total);


 // print the even numbers in one new array from the existing array

 let evenArray = [];
 var scores = [12,13,14,16]

 for (var i=0; i<scores.length;i++){

    if (scores[i] %2 == 0)
    {
        evenArray.push(scores[i] );
    }
}
console.log(evenArray);

// achieving the new list of even numbers from the above requisite with - filter method


let  newFilterEvenScores= scores.filter(test=>test%2==0);
console.log(newFilterEvenScores);

// map method to update each value in an array [ 12, 14, 16 ] ==> [24, 28, 32]

let newArray = [];
actualArray = [12,14,16];

for (i=0 ; i<actualArray.length; i++)
{

    let multiplication = actualArray[i]*2;
    newArray.push(multiplication);

}
console.log(newArray);

// achieving above with map function


let newMappedArray = actualArray.map(score=>score*2);
console.log(newMappedArray);

// if you want to sum the above new array

let totalSum = newMappedArray.reduce((sum, val)=>sum+val, 0);
console.log(totalSum);

// how to find even number, multiply by 2 and sum them in one single step:

let array = [11,12,14,15,16];

let requiredArray = array.filter(store=>store%2==0).map(store=>store*2).reduce((sum,val)=>sum+val,0);
console.log(requiredArray);

// sort the string

let fruits = ['banana', 'pomegranate', 'watermelon', 'apple'];
console.log(fruits.sort());


let arraySort = [19,11,8,6,14];

console.log(arraySort.sort((a,b)=>a-b));

// reverse a string
console.log(fruits.reverse());

// reverse a number

console.log(arraySort.reverse((a,b)=>b-a));


