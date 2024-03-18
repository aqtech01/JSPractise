// alert("Hello! THis is Sparta!")
console.log("This is Sparta!");
// Variable => a box to store a data 
// reserved keyword (variable name) (type of value)
// var => can change any time
// let => cahnge values any but not declared again 

let name = "Abdul Qadeer";
console.log(name);
// only we change values but not declare again 
name = "AQ";
console.log(name);

// declare a variable and give value other time 

let age ;
age = 20;
console.log(age);

// declare one time and assign value one time 
const gender = "Male";
// abc = "This is Sparta";
console.log(gender);
let twitterHandle = "@abdulqadeer0011";
console.log(twitterHandle);


// Data Types 
// Primitve type 
// 1- Number
let num = 4
let num1=12;
let num2=3;
console.log(num+num1);
console.log(typeof num);
console.log(typeof num2);
console.log(typeof(name));


// Basic Math 

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

let counter = 0;
console.log(counter);
counter++
console.log(counter);
counter--
console.log(counter);



// Boolean Operators

let isTrue = true;
console.log(isTrue);
let numer = NaN;
console.log(numer);


// falsy value
// false 
// null
// undefined
// 0 
// -0
// NaN
// '',"" empty quotes


let notDefined = undefined;
console.log(notDefined);
let notnull = null;
console.log(notnull);



// Comparison Operators

// Relational Operators
// <,>,<=,>=,

console.log(10 > 20);
console.log(10 < 20);
console.log(10 >= 20);
console.log(10 <= 20);


// <--------------------->

// Equality operators 
// Strict operators  
// ===,!==
// loss operators

console.log(10 == "10");
console.log(10 != "10");
console.log(10 === "10");
console.log(10 !== "10");


// <----------------------->

// Relational 

let firstFavNumber= 12;
let secFavNum = 13;
console.log(firstFavNumber > secFavNum);
console.log(firstFavNumber < secFavNum);
console.log(firstFavNumber >= secFavNum);
console.log(firstFavNumber >= secFavNum);


// <---------------------------->

// Equality



console.log(firstFavNumber == secFavNum);
console.log(firstFavNumber === secFavNum);
console.log(firstFavNumber !== secFavNum);
console.log(firstFavNumber != secFavNum);



// Strings

let firstName = "Abdul ";
let lastName = "Qadeer";
// console.log(firstName +" "+ lastName);

// concatination

// let fullName = firstName .concat(lastName);
// console.log(fullName);


// Append 
// firstName += lastName;
// console.log(firstName);


// length 

console.log(firstName.length);

// Cases 

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

// Slicing

console.log(firstName.slice(0,3));


// split 
console.log(firstName.split(" "));

// join 

console.log(firstName.split(" ").join(" "));


// include

console.log(firstName.includes("A"));


// Trim

console.log(firstName.trim());


let favActorName = "Robert Downy Jnr"
// let captalizefavActorName = favActorName.toUpperCase();
let message = `My Favourite Actor is ${favActorName.toUpperCase()} and he is known for his cool personality, good acting skills and hard work  `;
message += "his favourite show is Iron Man"
console.log(message); 
console.log(message.slice(0,6));
console.log(message.split(" "));
console.log(message.split(" ").join(" "));



// type Conversion

let money = 50;
console.log(typeof money);
money = money.toString();
money = "" (money);

let moneystr = "50";
console.log(moneystr);
console.log(typeof moneystr);
moneystr = parseInt(moneystr)
moneystr = Number(moneystr)
moneystr = +moneystr

console.log(moneystr);
console.log(typeof moneystr);







