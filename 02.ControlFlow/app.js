console.log("Control Flow");

// Control Flow Statement
let a = 20;
let b = 20;

if(a > b){
    console.log("a is grater than b");

}
else if (a < b){
    console.log("a is less than b");
}
else{
    console.log("a is equall to b");
}


 let password = 1;
if(password === 8)
{
    console.log("Welcome");
}
else if (password <= 8 ){
    console.log("Pasword is too short");
}
else if (password >= 8){
    console.log("Too Long password should be 8");
}
else {
    console.log("Please provide a password");
}

let day = "Monday"

// Switch Statement
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    
    default:
        console.log("Invalid Day");
        break;
}


// Loops
// For Loops

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

for(let i=0; i<=100; i++){
    console.log("----Outer Loop----");
    for(let j=0;j<=5;j++){
        console.log("----Inner Loop----");

    }
}

//While Loops


let i =0;
while (i <= 10) {
    console.log(i);
    i++;
    
}

// Do While Loops
let j =20;
do{
    console.log("Abdul Qadeer",j);
    j++;

}while(j < 401 );


// Logical Operators

// AND &&,


// OR ||

// NOT !

const ab = true
const ac = false
console.log(ab && ac);
console.log(ab || ac);
console.log(ab && !ac);




// Arrays 
//  let  fruits= ["Apple","Banana","Mango"];
//  for(let index = 0;index < fruits.length; index++){

//  console.log(fruits[index]); 

//  }



 const fruits = ["apples","mango","pineapple","grapefruit"]
 // push()
//  console.log(fruits.length);
//  fruits.push("banana")
// console.log(fruits);

//  // pop()
//  fruits.pop()
//  console.log(fruits.length);

// fruits.shift()
// console.log(fruits);
// fruits.unshift("apples")
// console.log(fruits);

// sbarr= fruits.slice(1,3)
// console.log(sbarr);

// const newFruits= ["orange","stawberry"];
// const allFruits = fruits.concat(newFruits);
// console.log(allFruits.length);
const pl = ["JS","Go","python","PHP"]
const numbers = [2,3,4,5,6,1]
// console.log(pl.includes("python"));

// console.log(pl.join(" - "));
console.log(pl.reverse());
console.log(numbers.sort());


// Objects 


const person = {
    "id":1,
    "name":"Abdul Qadeer",
    "age":23,
    "hobby":["Programming","Watching Movies"],
    "isProgrammer":true,

}
console.log(person.hobby);
console.log(typeof person);