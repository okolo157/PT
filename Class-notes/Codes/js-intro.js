let age = 25; //number
age = 26;

console.log(age);

let Name = "John"; //strings
console.log(Name);

const username = `my username is ${Name}`;

let isOnline = false; //booleans
console.log(isOnline);

let numbers = [22, 23, 34, 40, 80, 100, 22, 12, 10]; //array
let users = ["ade", "john", "james"];
console.log(users);
console.log(numbers);

//objects
let information = {
  Name: "John",
  username: `my username is ${Name}`,
  isOnline: false,
  numbers: [22, 23, 34],
  users: ["Ade", "John"],
};

//nested objects
const Users = [
  {
    Name: "John",
    username: `my username is ${Name}`,
    isOnline: false,
    numbers: [22, 23, 34],
    users: ["Ade", "John"],
  },
  {
    Name: "John",
    username: `my username is ${Name}`,
    isOnline: false,
    numbers: [22, 23, 34],
    users: ["Ade", "John"],
  },
];

console.log(Users[0]);

//arithmetic operations
let a = 4;
let b = 3;

let c = a * b;

let firstName = "John";
let lastName = "Doe";

// Joining text (concatenation)
let fullName = firstName + " " + lastName; // "John Doe"

// Modern way using template literals
let greeting = `Hello, ${firstName} ${lastName}!`; // "Hello, John Doe!"

//create three variables, assign numbers to them,
// multiply the first two, and add result to the third.

let temperature = 25;

//conditionals [if-statements and for loops]
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature < 20) {
  console.log("It's cool..");
} else if (temperature < 30) {
  console.log("It's nice out!");
} else {
  console.log("It's hot!");
}

//ternary opeartor
temperature < 0
  ? console.log("It's freezing!")
  : temperature < 20
  ? console.log("it's cool")
  : temperature < 30
  ? console.log("it's nice out!")
  : console.log("it's hot!");

for (let i = 0; i < 10; i++) {
  console.log(`Count is ${i}`);
}

for (let user in users) {
  console.log(users[user]);
}

// Creating a function
//arrow functions
const greet = (name, age, weight) => { //fuunction takes parameters
  return `Hello I am ${name} and I am ${age} years old, and i weigh ${weight}`;
};

console.log(greet("Ade", 20, "110kg")); //function accepts arguments
console.log(greet("John", 22, "130kg"));
console.log(greet("Sam", 23, "140kg"));


//arithmetic operations with functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

console.log(add(1, 2));
console.log(subtract(4, 2));

//Modifying the DOM with Javascript
const body = document.querySelector("body");
const firstButton = document.querySelector("#btn");
const allButtons = document.querySelectorAll(".btn");

firstButton.addEventListener("mouseleave", () => {
  body.style.backgroundColor = "red";
});

///array methods
const filterd = numbers.filter((number) => number > 2);
const found = numbers.map((num) => num * 2);
console.log(found);

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(`I like ${fruit}`));

let SomeUsers = ["John@gmail.com", "Ade@yahoo.com", "Richard@gmail.com"];
let foundInfo = SomeUsers.includes("John@gmail.com");
console.log(foundInfo);

const edited = SomeUsers.splice(1, 2);
console.log(edited);
console.log(SomeUsers);
