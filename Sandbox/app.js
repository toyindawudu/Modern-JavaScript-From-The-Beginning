// Log to the console
console.log("Hello World");

console.log("I am a string");
console.log(45);
let greeting = "Good Morning"

// console.log(greeting);


let val;

// // Number to String
// val = String(54);
// val = String(4+4);

// // Boolean to string
// val = String(true);

// // Date to String
// val = String(new Date());

// // Array to string
// val = String([1,2,3,4]);



// // toString 

// val = (5).toString();
// val = (true).toString();

// // String to number 

// val = Number('5');

// val = parseInt('100.30');
// val = parseFloat ('100.30') // This is for decimals


// // Output
// // console.log(val);
// // console.log(typeof val);
// // console.log(val.length);


// // const name = "Toyin";
// // const age = "33";
// // const job = "Web Developer";
// // const city = "London";
// // let html;


// // console.log("Hello World");
// // console.log("Hello World");
// // console.log("Hello World");


// // Create some arrays

// const numbers = [34,67,85,93,53,2,39];
// const numbers2 = new Array(23,55,44,23,56,878,82,1,);

// const mixed = [true, 'Love', null, undefined, 54, new Date()]

// let fruits;

// fruits = ["orange", "clementine", "mango", "bananas", "grapes"];



// // console.log(numbers);
// // console.log(numbers2); 


// // Get Array lemgth
// val = numbers.length;
// // Check if it's an Array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3];

// // Find the indes of value 
// val = numbers.indexOf(53);

// // Manipulating Arrays
// numbers.push(100); // Add on to the end
// numbers.unshift(15); // Add on to the beginning
// numbers.pop(); // Takes off 100 from the front
// numbers.shift(); // Takes off from the front 
// numbers.splice(1,1); // This removes 67 from the array of numbers
// numbers.reverse(); // This reverses the arrangement of the elements in the Array
// val = numbers.concat(numbers2); // This combines two variables in the variable val

// val = fruits.sort();

// // This is used to compare numbers and arrange smallest to largest
// val = [33,51,2,100,43, 91,1,];

// val = numbers.sort(function(x,y) {
//   return x - y;
// })

// // This is used to compare numbers and arrange largest to smallest
// val = numbers.sort(function(x,y) {
//   return y - x;
// })

// // 
// // console.log(numbers);
// // console.log(val);


// const person = {
//   firstName: "Steve"
// }

// let result;

// result = person;

// // console.log(result);


// const id = 100;

// EQUAL TO 

// if(id == 100) {
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// } 

// NOT EQUAL TO 

// if(id != 100) {
//   console.log('Not equal to 100')
// } else {
//   console.log('ID is equal 100')
// } 

// Equal to value & type

// if(id === 100) {
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// } 

//  Not Equal to value & type

// if(id !== 100) {
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// }


// Test if undefined

//  if (typeof id) {
//    console.log('The ID is' )
//  } else {
//    console.log('No ID')
//  }


// Greater than or less than 

// if (id<=100){
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// }

// IF ELSE 

// const colour = "Green";
 
// if(colour === "Green"){
//   console.log("Colour is green")
// } else if (colour === "Blue"){
//   console.log("Colour is blue")
// } else {
//   console.log("Colour is neither green or blue");
// }

// LOGICAL OPERATORS


// const name = 'Steve';
// const age = 20;

// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`)
// } else if (age >=13 && age <= 19) {
//   console.log(`${name} is a teenager`)
// } else {
//   console.log (`${name} is an adult`)
// }


// Functions 

// Function Declarations

// function greet(){
//   return ('Hello');
// }

// // console.log(greet()); 

// // FUNCTIONS EXPRESSIONS

// const square = function(x = 3) {
//   return x*x;
// }

// console.log(square());

// // IIFY ( Immediately Invokable Functions Expressions) 

// (function(){

// })


// Property methods


// General Loops

// There are three times for loop iterations. 

// 1. For loop
// 2.Do while loop
// 2. For loop
// 3. While loop


// For loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// While loop

// let i = 1;
// while( i < 10) {
//   console.log(i)
//   i++;
// }


// Do While

// let i = 0;

// do {
//   console.log(i);
//   i++
// }

// while (i<10);


// Looping through an Array 


// const cars = [ 'Ford', 'Chevy', 'Honda', 'Toyata'];

// for(let i = 0; i < cars.length; i++ ){
//   console.log(cars[i]);
// }

// Looping using the forEach() method

// cars.forEach(function(car){
//   console.log(car)
// });



//MAP

// const users = [
//   {id: 1, name: 'John',},
//   {id: 2, name: 'Sara',},
//   {id: 3, name: 'Karen',},
//   {id: 4, name: 'Steve',}
// ];

// const ids = users.map(function(user){
//   return user.id;
// })

// console.log(ids);

// For In Loop 

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in user){
//   console.log(x)
// }


