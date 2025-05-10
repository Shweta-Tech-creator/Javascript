// Primitive:

const { captureOwnerStack } = require("react");

// 7 types: String, Number, Boolean , Null, Undefined, Symbol, BigInt 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// Reference(Non-Primitive):
// Array, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ******************Stack and Heap ****************

// Stack(Primitive) and Heap (non-primitve)
let myname ="Shweta" 
let anothername = myname
anothername = "Shweta kadam"
console.log(myname);
console.log(anothername);

let Userone = {
    email: "user@gmail.com",
    upi: "upi@.com"
}

let usertwo = Userone
usertwo.email = "shweta@gmail.com"
console.log(Userone);
console.log(usertwo);

abc