        // note:
 // Comparison operators are used to compare two values and return a boolean (true or false). These are commonly used in conditional statements like if, while, switch, etc.


console.log("2" > 1);
console.log(2 > 1);


console.log(null > 0);
console.log(null >= 0);
// reason is that the equality check == and >,< ,>= ,<= works differently comparison convert a null to a number treating is as a zaro that's why null >= 0 is true and null > 0 is false.
console.log(null == 0);


console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);


// === (strict check)
console.log("2" === 2);


    //  note:
// == compares values only, does type coercion (converts types before comparing)
// === compares both value and type
// Always use === and !== instead of == and != to avoid unexpected results due to type coercion.
