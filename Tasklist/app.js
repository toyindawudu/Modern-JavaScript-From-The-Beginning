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

  // Remove the task event

    taskList.addEventListener('click', removeTask);

  // Clear task event list 

    clearBtn.addEventListener('click', clearTasks);

  // Filter through task list event

    filter.addEventListener('keyup', filterTasks);
}
// Create a li element for the added task
function addTask(e){
  if(taskInput.value === '') {
    alert('The task input is empty, so add a task.')
  }

  // Add a li and an anchor link
  const li = document.createElement('li');
  const link = document.createElement('a');
  
  // Create text node and append to the li element
  
  li.appendChild(document.createTextNode(taskInput.value));

  // Add a classname to the anchor link 

  link.className = 'delete-item secondary-content';

  // Add icons to the Html to the link 

  link.innerHTML = '<i class="fa fa-remove"></i>'

  // Append the link to the li
  
  li.appendChild(link);

  // Append the li to the ul, so that it shows in the UI
  
  taskList.appendChild(li);

  // Store the task input to Local Storage
  storeTaskInLocalStorage(taskInput.value); 

  // Clear the input

  taskInput.value = '';

  // console.log(li);

  e.preventDefault();

}

// Store the Task to the Local Storage 

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify('tasks'));
}

// Remove Task 
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

// Clear Task List
function clearTasks() {
  // taskList.innerHTML = '';
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Task List
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = item.firstChild.textContent;
    if ( item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}