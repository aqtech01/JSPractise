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






// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(fruits.length);
// console.log(fruits.sort().reverse());
// console.log(fruits.findIndex("Orange"));
// console.log(fruits.reverse());

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.reverse());
// const sl =arr.slice(0,1);
// arr.shift()
// console.log(arr);
// arr.unshift(1)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.push(10)
// console.log(arr);



// Spread OPerators
// const colors =  ["red","blue","green","black"];
// const morecolors = ["purple","white"];
// const concat = [...colors,...morecolors];
// console.log(concat);


// const obj1 = {
//     x:1,
//     y:2,
// };
// const obj2= {z:3};
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// const person ={name:"AQ",age:19,gender:"male"};

// const arr3 = [1,2,3];
// const arr2 = [4,5];

// const arr4 = [...arr3,...arr2];
// console.log(arr4);



// Rest Operators

// ... 


// function user(...userId) {
//     console.log(userId);    
// }
// user("AQ",19,"Programmer","Cricketer");



// const foo = ["one","two","three"];
// const [a, ,c]= foo;
// console.log(a);

// console.log(c);

// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);

// distinctive varibale 

// const [a1,...b] = ["one","two","three",[1,2,3,4,5]];
// console.log(a1);
// console.log(b);
// const color = ["red","green","blue","yellow","orange"];
// const [a,b,c,...d]= color
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const student = {name:"AQ",positon:"first",rollNo:9}
// const {name} = student
// console.log(name);

// const persons = {
// name:"Abdul Qadeer",
// age:23,
// gender:"Male",
// country:"Pakistan"
// }
// const {name:personName,age:personAge,country:personCountry,...rest}= persons
// console.log(personName); 
// console.log(personAge); 
// console.log(personCountry); 
// console.log(rest);

// const persons = {
//     name:"Abdul Qadeer",
//     age:23,
//     gender:"Male",
//     country:"Pakistan"
//     };
// function printPersonInfo({name,age,country}){
// console.log(`Name:${name}`);
// console.log(`Age:${age}`);
// console.log(`Country:${country}`);
// };


// printPersonInfo(persons)


// const  options = {
//     title :"My Menu",
//     items : ['item1','item2']
// }
// const  showMenu=({title,items:[items1,items2]})=>{
// console.log(`${title}`);
// console.log(`${items1}`);
// console.log(`${items2}`);
// }
// showMenu(options);


// Ternary Operators
// const password =8

// const passwordChecker=(ps)=>{
//     return (ps === 8) ? console.log("Strong Password") : ( ps < 8)?console.log("Password too short"):console.log("Passwword too long");;
// };
// passwordChecker(password);

// const haveMoney = false;
// const buyProduct =(haveMoney)=>{
//     return    haveMoney == true ?console.log("You can buy product"):console.log("You can't buy product");
// } ;
// buyProduct(haveMoney)

// const person = {
//     name :"AQ",
//     age:23,
//     gender:"Male",
// }
// for (const key in person) {
//     const element = person[key];
//     console.log(`${key} : ${element}`);
        
    
// }

// const object = {a:1,b:2,c:3};
// for(var index in object){
//     console.log(`${index}: ${object[index]}`);
// }


// const foo = "Hello Welcome";
// for(const char of foo){
//     console.log(char);
// }
// const object = ["blue","red","green","yellow"];
// object.forEach((color)=>{
//     console.log(color);
// });


// const words = ["Hello","bird","table","football"];
// words.forEach((element)=>{
//     console.log(element.toUpperCase());
// })

// const num = [1,2,3,4,5,6,7,8,9];
// var sum = 0;
// num.forEach((element=>{
//      sum += element


// }));
// console.log(sum);



// map function

// let numbers = [1,2,3,4,5,6];
// let double = [];
//  numbers.forEach(num => {
//     num = num*2
    
//     num = double.push(num); 

// }
//     ); 
// let double = numbers.map(num => num*2);
//  console.log(double);

// console.log(double);


// const arr = [1,2,3,4,5,6,7,8,9];
// const mul = [];
// arr.forEach(num => {num = num*10
//     num = mul.push(num);

// }
//     );
//     console.log(mul);
// const mul = arr.map(num => num*10);
// console.log(mul);


// Filter Method

