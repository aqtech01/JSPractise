console.log("Welcome");

// Functions
// function greetings(){
//     console.log("Hello Functions");
// }
// greetings()

// return functions

function addNumbers(a,b){
    plus = a+b;
    return plus;
}
const res = addNumbers(12,32);
console.log(res);


function myFunction(a,b){
const res = a*b;
return res;
}
const result = myFunction(12,3)
console.log(result);


// Function Expression

const greeting = function (user){
   console.log("Hello "+ user); 
}
greeting("AQ");
 

// CallBack Function
// showCallfunc(function (value){
// console.log(value);
// });

function greet(name,greetings){
    console.log(`Welcome ${name}`);
    greetings()

}
greet("Qadeer",function greetings(){
    console.log("Hello Functions");
});


// Exercise


function showCallFunction(fn){
    const a = 10;
   fn(a) 
}

showCallFunction(function (a){
    console.log(`The Value of Call Back Function is ${a}`);
});

// VAribales Scope

// Global Variable => Outside the block and call in any place;
// Local Variable => Insde the Block

// function greets(){
//     return `Hello! My name is ${person.name}  & I am ${person.age} years old.`;
// }

// Methods in JS
// const person = {
//     name :"John",
//     age:30,
//     greets:function(){
//         return `Hello! My name is ${person.name}  & I am ${person.age} years old.`;
//     },
// };
// console.log(person.greets());

// JSON


const person = {
    
        "name":"Abdul Qadeer",
        "age":23,
        "email":"abcd@gmail.com",
        "isProgrammer":true,
        "hobbies":["Programming","Watching Movies"],
        "Address":"Leeds"
    
}
const jsonstring= JSON.stringify(person)
console.log(jsonstring);
const parsedObject = JSON.parse(jsonstring)
console.log(parsedObject);

// Date 

const currentDate = new Date(2024,5,24,12,30,0,0)
console.log(currentDate);



// Set Interval
setInterval(function(){
    console.log("Again and Again");
},2000)




