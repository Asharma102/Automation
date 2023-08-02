let day = 'sunday '
console.log(day.length);

let subDay = day.slice(0,3)
console.log(subDay)



let splitString = day.split('d')
console.log(splitString[1].length)
console.log(splitString[1].trim().length)

let date = '78'
let nextDate = '90'
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff)
diff.toString()

let newQuote = day+ "is funday"
console.log(newQuote);

console.log(newQuote.indexOf('day', 4));
