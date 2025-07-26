// 🚀 Bhai ke Code Style Comments Start Here
// This file is full of basics like Operators, Conditions, Ternary, and Switch. 
// 75% English, 25% Hindi with thoda mazaak, thoda logic — Bhai ke Code Vibes 🔥
// ------------------------------------------------------------------

// 🧮 OPERATION
// Operation ka matlab hota hai — doing something with values (like math ya logic).

// ➕ Operators
// In JS, operators are symbols used to perform operations on values or variables.
// Example: a + b => '+' is operator, a & b are operands. Full thing = expression

// 🧠 Arithmetic Operators - Basic Maths 🧠
let a = 5;
let b = 2;
// console.log("a + b =", a + b); // Addition
// console.log("a * b =", a * b); // Multiplication
// console.log("a / b =", a / b); // Division
// console.log("a - b =", a - b); // Subtraction
// console.log("a % b =", a % b); // Modulus = remainder after division
// console.log("a ** b =", a ** b); // Power = a raised to b

// ➕ Unary Operators - Operate with single value
console.log("a = ", a, " b =", b);
// a++ means use then increase, ++a means increase then use
console.log("a++ =", a++); // post-increment
console.log("++a =", ++a); // pre-increment

// 📝 Assignment Operators - Right to Left
// =, +=, -=, *=, /=, %= etc.

// 👀 Comparison Operators - Value Checking
console.log(" a == b ", a == b); // value check
let x = 5, y = "5";
console.log(" x == y ", x == y); // true, type coercion hoti hai
console.log(" x === y ", x === y); // false, kyuki data type same nahi hai

// 🤔 Logical Operators
// AND (&&), OR (||), NOT (!)
// Think like: dono true chahiye, koi ek chalega, ya ulta karna hai

// 🧪 Condition Statements - If-Else
// Jab condition true ho tabhi koi code chale — simple logic
let color;
let mode = "dark-mode";
if (mode == "dark-mode") {
    color = "black";
} else if (mode == "light") {
    color = "white";
} else {
    color = "normal";
}
console.log("color is ", color);

// ✔️ Age Check
let age = 19;
if (age > 18) {
    console.log("you can vote yes");
} else {
    console.log("no you can't vote");
}

// 🔢 Odd/Even Checker
let num = 20;
if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// ⚖️ Ternary Operator - One line if-else
// Syntax: condition ? true : false
let result = age > 18 ? "adult" : "not adult";
console.log(result); // Output: adult

// 📦 Switch Case - Clean multiple options check
const expr = "papayas";
switch (expr) {
    case 'oranges':
        console.log('ye orange hai bhai');
        break;
    case 'papayas':
        console.log("ye papaya hai bhai");
        break;
    default:
        console.log("nhi hai mere pass");
}

// ⚠️ Callback Hell - Problem Example
// Jab nested functions itne ho jaayein ki code ladder ban jaata hai, tab kehte hai callback hell

// Example: Callback Hell Simulation
// getData(() => {
//     getMoreData(() => {
//         getFinalData(() => {
//             console.log("data mil gaya");
//         });
//     });
// });

// ☕ Promise Chai - Solution for Callback Hell
// Promises se code cleaner ho jaata hai, chaining easy ho jaati hai
// getData()
//     .then(() => getMoreData())
//     .then(() => getFinalData())
//     .then(() => console.log("sab kuch mil gaya"));

// 💡 Mini Definitions for Quick Revision 💡
// 1. Operator: A symbol that performs an operation on operands.
// 2. Operand: The values on which operations are performed.
// 3. Expression: Combination of variables, constants & operators that returns a value.
// 4. Ternary: Short form of if-else (condition ? true : false).
// 5. Callback Hell: When too many nested callbacks make code unreadable.
// 6. Promises: Modern JS feature to handle async work without callback mess.

