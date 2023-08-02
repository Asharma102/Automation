const flag = true;

if (!flag)
{
console.log('condition satisfied');
}

else 
{
    console.log(flag);
    console.log('condition NOT satisfied');
}


// While loop - so we can use it when we know how many times the loop will execute.

let i=0;
while(i>20){
 i++   
console.log(i);
}

do{
i++
} while(i>20);
{
console.log(i);
}

console.log("new line from below:!!!!!!!!!!!**************&&&&&&&&&&&&&&&&&&&&");

// give me the number which is common multiple of 2 and 5 out of 1 to 10.

let n =0;
for(let k=1; k<=100; k++){
if(k%2 == 0 && k%5 == 0)
{
    n++;
    console.log(k);
    if(n ==3);
    break;
}
}

let required = true
while(required)
{
    console.log(required);
    required = false;
}


