// "use strict";
// var me;


// //Strict Mode
// // const interface = "Audio"
// // console.log(interface)
// // const private = false;

// // Scoping 

// let age = 10; //Global Scoped

// // if(true){
// //     console.log(age)
// // }

// function calAge() {
//     let age = 20; //Local Scoped
//     console.log(age);

//     function printAge() {
//         const age = 30; //Block Scoped
//         console.log(age);
//     }

//     printAge();
// }

// calAge()

// //Hoisting
// // console.log(me)
// // console.log(year)

// var me = "arjit";
// let job = "developer";
// const year = 2024;



// console.log(job)
// console.log(year)


// let name ;
// console.log(name)

// greet()
// //Dclarations are hoisted
// function greet(){
//     console.log('Hello')
//     console.log("From greet fn", this)
// }

// // sayHello()
// //Expressions are not hoisted
// const sayHello = function(){
//     console.log('Hello from expression')
// }


// //Arrow functions are not hoisted

// var addArrow = (a, b) => a + b;
// console.log(addArrow(10,20))


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(window.x)
// console.log(window.x === x)

// console.log(window.y === y )

// //this keyword in js

// //In global scope this refers to window object
// // console.log(this)
// // console.log(this.x)



// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);

//     const sayHelloToUser = ()=>{
//         console.log("Hello User")
//         console.log(this)
//     }
//     sayHelloToUser()

    
// };
// calcAge(1991);

// const sayHelloToUser = ()=>{
//     console.log("Hello User")
//     console.log(this)
// }

// sayHelloToUser()

// const arjit = {
//     name : "Arjit",
//     age : 20,
//     sayHello:function(){
//         console.log(this)
//         console.log(this.name)
//         console.log("Hello")
//     },
//     greet:()=>{
//         console.log(this)
//         console.log("Hello")
//     }
// }

// arjit.greet()

//Difference between arrow function and normal function
// 1. Structure of arrow function is simpler
// 2. No need to use return keyword\
// 3. value of this keyword
// 4. Arguments 

// const addNums = function(a,b){
//     console.log("Arguments", arguments)
//     return a+b;
// }

// const addNumbers = (a,b)=>{
//     // console.log("Arguments", arguments)
//     return a+b;
// }


// console.log(addNums(5,4))
// console.log(addNums(10,14,14,15))
// console.log(addNumbers(13,15))

//Primitive and Objects

let age = 30;
let yourAge = age;

age = 31;
console.log(age,yourAge)


const me = {
    name :"arjit",
    age:20
}
//Shallow copy
const myFriend = me;

me.age = 32;
console.log(me.age,myFriend.age)

let myStudent = ['arjit','sujatha','arjun'];
let myFriendStudent = myStudent;
myStudent[0]="Ankit"

console.log(myStudent,myFriendStudent)

//Deep copy
let meCopy = Object.assign({},me);

me.age = 44
console.log(me)
console.log(meCopy)

