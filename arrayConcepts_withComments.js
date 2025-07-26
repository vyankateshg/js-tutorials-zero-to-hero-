// Array iteration using a normal for loop
// Old-school loop wala style: checking each hero one by one
let heroes = ["ironman","hulk","saktiman","hanu-man"];
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);  // Bhai, yeh hero hai: 🦸
}

// Using for...of loop to iterate through array
// Yeh modern JS ka shortcut hai loop ka — easy breezy
for(let hero of heroes){
    console.log(hero); // Each hero getting spotlight 🌟
}

// Print all cities in uppercase using for...of loop
let cities = ["dilhi","mumbai","pune","gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase()); // Desi cities getting CAPSLOCK treatment 🔊
}

// Calculate average marks from an array
let marks = [85, 97, 56, 72, 25, 87, 96];
let total = 0;
for (let mark of marks){
    total += mark;  // Totaling like school ki report card 📋
}
console.log(total / marks.length);  // Bhai ka average score — smart kid vibes 🎓

// Apply 10% discount to each item and update in array
let items = [250, 645, 300, 900, 50];
let index = 0;
for(let price of items){
    console.log("value at index " + index + " is " + price);  // Price before discount
    let offer = price / 10; // 10% ka hisaab
    items[index] -= offer;  // MRP se sasta bhai!
    console.log(`The price after 10% discount is ₹${items[index]}`); 
    index++;
}

// Another way to apply 10% discount using classic for loop
let prices = [250, 645, 300, 900, 50];
console.log("Before Discount: ", prices);
for(let i = 0; i < prices.length; i++){
    let offer = prices[i] / 10;
    prices[i] -= offer;
}
console.log("After 10% Discount: ", prices);  // Sasta aur tikaau! 💸

// Array methods time — time for JS ke weapons ⚔️
let foodItems = ["potato", "apple", "litchi", "tomato"];

// Push - adds elements at the end
foodItems.push("cherry", "burger", "paneer"); // Bhookh lagi thi bhai ne push kiye naye items 🍔
console.log(foodItems);

// Pop - removes last element
let deleted = foodItems.pop(); // Last item gaya fridge se 🚫
console.log("Deleted item:", deleted);
console.log("Updated list:", foodItems);

// Convert array to string
let arraytostring = foodItems.toString(); // Now it's ek hi line ka string 🍜
console.log(arraytostring);

// Concat - joins multiple arrays
let dcHeros = ["aquaman", "superhero", "batman"];
let indianHeroes = ["shaktiman", "hanu-man", "krish"];
let marvelHeros = ["ironman", "hulk", "spiderman", "dr. strange", "antman"];
let heros = marvelHeros.concat(dcHeros, indianHeroes); // Avengers + DC + Desi — multiverse unlocked 🌀
console.log(heros);

// Unshift - adds at the beginning
indianHeroes.unshift("BhaiKecodes"); // Bhai apne aap ko hero maan chuka hai 🥷
console.log(indianHeroes);

// Shift - removes first element
let delval = indianHeroes.shift(); // Bhai ne pehli line se nikal diya apne aap ko 😢
console.log("Deleted:", delval);

// Pop - removes last element
let popone = indianHeroes.pop(); // Last ka hero gaya holiday pe 🏖️
console.log("Removed last:", popone);

// Push - adds at the end again
indianHeroes.push("krish"); // Welcome back, Krish 🦸‍♂️

// Slice - returns a portion of array (non-destructive)
console.log("Slice of Marvel Heroes:", marvelHeros.slice(1, 3)); // Hulk aur Spiderman ka duo 😎

// Splice - powerful tool to add/remove/replace elements (destructive)
let numArr = [1, 2, 3, 4, 5, 6, 7];
numArr.splice(1, 2, 202, 303);  // 2 aur 3 ki chhutti, naye bande recruit 🔁
numArr.splice(0, 1, 1111);      // Pehla banda upgrade ho gaya 💪
console.log("Updated numArr:", numArr);

// Final practice challenge: Company ka IPO edition 🏢
let companies = ["bloomberg", "Microsoft", "uber", "Google", "IBM", "Netfilex"];

// Remove first company
companies.shift();  
console.log("After removing first:", companies);

// Replace uber with Ola — Swadeshi Zindabad 🇮🇳
companies.splice(1, 1, "Ola");

// Add Amazone at end — spelling thoda off hai but chalega 😂
companies.push("Amazone");
console.log("Final list of companies:", companies);
