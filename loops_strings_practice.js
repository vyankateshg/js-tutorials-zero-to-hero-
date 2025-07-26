// 🌀 Simple for loop – printing a mantra 100 times (because Shree Ram deserves it!)
for (let i = 0; i < 100; i++) {
    console.log("\n Jai Shree Ram", i);
}

// 🌀 Do-while loop – executes at least once (Radhe Radhe 10 times)
let i = 0;
do {
    console.log("\n Radhe Radhe ", i);
    i++;
} while (i < 10);

// 🎯 String length – finding total characters in your name
let name = "vyanki";
let lenda = name.length;
console.log("Length of name:", lenda);

// ✅ PROBLEM: How to check even numbers from 0 to 100?
// ✅ SOLUTION: Use modulo (%) operator inside a for loop
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    }
}

// 💡 Template literals – modern way to embed variables inside strings
let obj = {
    item: "pen",
    price: 10,
    quantity: 100
};

let output = `The cost of ${obj.item} is ₹${obj.price} and quantity available is ${obj.quantity}.`;
// Old school way – thoda boring
console.log("The cost of", obj.item, "is", obj.price, "and the quantity", obj.quantity);
// Modern JS way – stylish & readable
console.log(output);

// 🎀 Special string with backticks – used for multi-line or styled text
let specialString = `I am the best one in string`;
console.log(specialString);

// 🎯 Mini Project: Username Generator
// ✅ PROBLEM: Create a unique username based on user input
// ✅ SOLUTION: Prompt + string concatenation + length
// let name = prompt("Enter your full name:");
const username = "@" + name + name.length;
console.log("Generated username:", username);
