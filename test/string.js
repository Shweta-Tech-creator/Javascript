const name = "Shweta kadam";
const age = 19;

console.log(`Hello My Name is ${name} and I am ${age} years old`);

const gameName = new String ("car-bus-auto")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('a'));


const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringone = "    Shweta    "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://www.google.com/search"
console.log (url.replace('search','-'))
console.log (url.includes('www'))
console.log(gameName.split('-'));


