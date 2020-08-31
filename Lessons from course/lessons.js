// const sayHello = function() {
//   console.log('Hello');
// }

// Changing the above using arrow functions
// const sayHello = () => {
//   console.log('Hello');
// }

const sayHello = (name) => {
  console.log(name)  // This prints out the name to the console when it's called 
}

const userName = (firstname, lastName) => {
  console.log(`${firstname} ${lastName} welcome to the NBA`);
}

// sayHello('Ashley');  

// userName('Josiah', 'Dawudu');

// Using arrow functions as callbacks 
const users = ['Toyin', 'Titi', 'Josiah'];

const nameLengths = users.map((name) => {
  return name.length;
});

let fruits = ["Pear", "Apple", "orange"];

fruits.forEach(function(val){
  console.log(val);
})

console.log(users);