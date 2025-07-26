// 🔸 Object & 'this' in Method
// Definition: Object is a collection of key-value pairs, and 'this' refers to the current object inside a method.
// Bhai ke code style: Jab bhi object ke andar function chalaye, 'this' wahi object ko point karega. Samjha karo!

const student = {
    fullname: "Vyankatesh Gupta",
    marks: 99.0,
    printMarks: function () {
        console.log("marks - ", this.marks); // 'this' refers to student object
    },
};

// 🔸 Reusability via Prototypes
// Problem: Har object ke liye same function dubara likhna padta hai, code reuse nahi hota.
// Solution: Set prototype so that common methods can be reused by other objects too.

const employee = {
    caltax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

const karanArju1 = {
    salary: 50000,
    caltax() {
        console.log("tax rate is 20%");
    },
};

// Reusability by setting prototype
karanArjun.__proto__ = employee;
karanArju1.__proto__ = employee;

// 🔸 Classes in JS (ES6)
// Definition: Class is a blueprint for objects. It has constructor for initialization and methods for behavior.
// Bhai ke code style: Car banani ho to ek class banalo, fir jitni chahiye utni car banao, factory jaisa system 😄

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 120.9);
let lexus = new ToyotaCar("lexus", 10.9);
console.log(fortuner);

// 🔸 Inheritance
// Definition: One class can use properties & methods of another using 'extends'.
// Bhai ke code style: Baccha maa baap ke features inherit karta hai, yahi to hai real-world ka OOP 😎

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let childobj = new Child();
childobj.hello(); // Inherited from Parent

// 🔸 Super Keyword
// Definition: 'super' is used to call parent class constructor or methods inside child class.
// Bhai ke code style: Parent ke constructor ya method ko bulane ke liye “super” lagate hai — ek tarah se respect dena!

class person {
    constructor(name) {
        this.name = name;
        this.species = "homo sapiens";
        console.log("Enter parent constructor");
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends person {
    constructor(name, branch) {
        console.log("Enter child constructor");
        super(name); // calling parent constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work() {
        super.eat(); // calling parent method
        console.log("solve problems, build something");
    }
}

class Doctor extends person {
    work() {
        console.log("treat patients");
    }
}

let engiObj = new Engineer("Vyankatesh", "JG University");

// 🔸 Error Handling - try...catch
// Definition: JS ka system for managing errors without crashing the program
// Bhai ke code style: Agar koi gadbad ho jaye to “try-catch” bhai hai na sambhalne ke liye.

try {
    let a = 10;
    let b = 20;
    console.log(a + b);    // 30
    console.log(a + c);    // error: c is not defined
    console.log(a / 0);    // Infinity
    console.log(a + b);
    console.log(a + b + 10);
} catch (e) {
    console.log("🔥 Error caught bhai:", e); // Will catch the reference error
}
