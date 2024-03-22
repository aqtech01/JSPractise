// const double = (number)=>{
//     return number*2;
// }
// const double = number=> number*2;
// console.log(double(3));

// setTimeout(()=>{
//     console.log("Hello");
// },2000)


// Enhanced Objects Literals


// const user=(name,age,work) =>{
//     return {
//         name:name,
//         age:age,
//         work:work,
//         intro:()=>{
//             console.log(`My Name is ${name} and my age is ${age} and I'm a ${work}`);
//         },
//     };
// }
// const aq = user("Qadeer",18,"Programmer");
// console.log(aq.intro());


// const user = (a,b,c)=>{
//     return {
//         a:a,
//         b:b,
//         c:c,
//     };
// };

// console.log(user(1,2,3));

// const lib = {
//     sum :(a,b)=> a+b,
//     mult :(a,b)=>a*b,  
// };
// console.log(lib.sum(2,3));
// console.log(lib.mult(3,4));


// const getPersionES6 = (name,age,height)=>{
//     return {
//         name:name,
//         age:age,
//         height:height,
//         output:()=>{
//             console.log(`Hi! My Name is ${name} and my age is ${age} and height is ${height}`);
//             },
//     };
// }
// const newoutput = getPersionES6("Qadeer",23,5.6)
// console.log(newoutput.output());



// const multiply = (a,b=1)=>{
// return a*b
// };
// console.log(multiply(2,3));


// Spread OPerators

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
console.log(fruits.length);
console.log(fruits.sort().reverse());
// console.log(fruits.findIndex("Orange"));
console.log(fruits.reverse());

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.reverse());
// const sl =arr.slice(0,1);
// arr.shift()
// console.log(arr);
// arr.unshift(1)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.push(10)
// console.log(arr);