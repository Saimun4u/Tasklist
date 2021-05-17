const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearTasks = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

//Load Event Listeners

loadEventListeners();

//Load all event listeners

function loadEventListeners(){
    taskForm.addEventListener('submit', addTask);

    //Remove Task
    
    taskList.addEventListener('click', removeTask);

    clearTasks.addEventListener('click', clearTask);

}


//Add task function

function addTask(e){

    if (taskInput.value === ''){
        alert('No input given')
    }

    //Create New Element

    const li = document.createElement('li')

    //Give className to newly created element

    li.className = 'collection-item';

    // Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    //Create a new link element

    const link = document.createElement('a');

    //Give className to new link

    link.className = 'delete-item secondary-content';

    //Add icon html

    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the li to ul

    li.appendChild(link);

    //Add li to Tasklist

    taskList.appendChild(li);

    // Clear input field

    taskInput.value = '';

    e.preventDefault();
}

//Remove Task function

function removeTask(e){

    if (e.target.parentElement.classList.contains('delete-item')){

        e.target.parentElement.parentElement.remove();

    }

    console.log(e.target.parentElement)

    e.preventDefault();
}