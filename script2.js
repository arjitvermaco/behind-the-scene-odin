'use strict';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const openingHours = {
    [weekdays[0]]: '8am - 5pm',
    [weekdays[1]]: '8am - 5pm',
    [weekdays[2]]: '8am - 5pm',
    [weekdays[3]]: '8am - 5pm',
    [weekdays[4]]: '8am - 5pm',
    [weekdays[5]]: '10am - 5pm',
    [weekdays[6]]: '10am - 5pm',
};

console.log(openingHours);

const companyDetails = {
    name: 'Google',
    location: 'Mountain View',
    numEmps: 1000,
    ceo: '<NAME>',
    url: 'https://www.google.com',
    // openingHours:openingHours
    //ES6 object literals
    openingHours,
    // companyIntro:function(){
    //     return(
    //         `Hey! We are ${this.name} and we are located at ${this.location}.`
    //     )
    // }

    companyIntro(){
        return(
            `Hey! We are ${this.name} and we are located at ${this.location}.`
        )
    }
}

console.log(companyDetails)
console.log(companyDetails.companyIntro())

//Array Destructuring
let users = ['Amrit', 'Arjit', 'Amit'];
let newUsers = ['Kerth', 'Raj', 'Raju'];

//Spread operator => mostly on right side of = 

console.log(...users)
console.log(...newUsers)

let allUsers = [...users,...newUsers]
console.log(allUsers)

const arr = [1,2,...[3,4]]
console.log(arr)

//Rest operator
// when ... are on the left side of =
const [a,b,...others] = [1,2,3,4]
console.log(a,b,others)

const {name,numEmps:numberOfEmp} = companyDetails;
console.log(name,numberOfEmp)

let myCar = {
    brand: 'BMW',
    model: 'X5',
    year: 2019,
    color: 'Black',
}

let myCarClone = {...myCar}

 myCar.model= 'X6'
 console.log(myCarClone)

// let myCar2 = {
//     ...myCar,
//     model: 'X6',
//     year: 2020,
// }

// console.log(myCar2)

//Nested Object
const myAddress = {
    street: {
        lane1: '123 Main St',
        lane2: 'new delhi',
    },
    city: 'Boston',
    state: 'MA',
    zip: 12345,
    country: 'USA',

}

let {street:{lane1,lane2}
,city,state,zip,country="India"} = myAddress

console.log(country)
console.log(lane1)
console.log(lane2)


function myFunc(){
    console.log("Hello");
    console.log("How")

    setTimeout(()=>{
        console.log("are")
        console.log("you")
    },5000)

    console.log("Doing")

}

myFunc()