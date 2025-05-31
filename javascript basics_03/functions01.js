// 1. Simple Function with Arguments and Return
function multiplyNumbers(a, b) {
    return a * b;
}

const product = multiplyNumbers(4, 5);
// console.log("Product is:", product);

// 📝 Note: This function takes two numbers and returns their product.
// `return` is used instead of console.log so the result can be stored or used elsewhere.

// --------------------------------------------------------

// 2. Function with Default Parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

// console.log(greetUser("Sweta"));
// console.log(greetUser());

// 📝 Note: If no argument is passed, it defaults to "Guest".
// Helps prevent `undefined` errors when calling functions.

// --------------------------------------------------------

// 3. Function Using Rest Parameters
function totalBill(tax, ...items) {
    let total = 0;
    for(let item of items){
        total += item;
    }
    return total + tax;
}

// console.log(totalBill(10, 100, 200, 300));

// 📝 Note: `...items` gathers all remaining arguments into an array.
// Very useful when the number of items is unknown.

// --------------------------------------------------------

// 4. Function to Handle an Object Parameter
function displayUserInfo({name, email}) {
    console.log(`Name: ${name}, Email: ${email}`);
}

const user = {
    name: "Sweta",
    email: "sweta@example.com",
    age: 22
};

// displayUserInfo(user);

// 📝 Note: We're destructuring the object directly in the function parameter.
// Only the required keys are extracted (`name` and `email`).

// --------------------------------------------------------

// 5. Function to Get the Last Element of an Array
function getLastItem(arr) {
    return arr[arr.length - 1];
}

const scores = [10, 20, 30, 40, 50];
// console.log(getLastItem(scores)); // 50

// 📝 Note: This returns the last element using array indexing.
// `arr.length - 1` is always the index of the last element.

// --------------------------------------------------------

// 6. Function Expression (stored in a variable)
const isEven = function(num) {
    return num % 2 === 0;
}

// console.log(isEven(10)); // true

// 📝 Note: This is a function expression.
// It's useful when passing functions as arguments or assigning dynamically.

// --------------------------------------------------------

// 7. Arrow Function
const square = (n) => n * n;

// console.log(square(6)); // 36

// 📝 Note: Arrow functions are short and clean.
// Perfect for one-line return operations.
