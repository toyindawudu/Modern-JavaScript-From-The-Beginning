//Define the Variables 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// Function for all event listeners
function loadEventListeners(){
  // Function for adding tasks
    form.addEventListener('submit', addTask);
}
// Create a li element for the added task
function addTask(e){
  if(taskInput.value === '') {
    alert('The task input is empty, so add a task.')
  }
  // prevent default 
  e.preventDefault();
}
  // Add a ul of collection

  // Create text node and append to the li

  // Create a new link element 

  // Add a delete class 

  // Add icons to the Html to the link 

  // Append the link to the li

  // Append the li to the ul to show in the UI


  // Clear the input


