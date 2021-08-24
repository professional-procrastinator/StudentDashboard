// Select all of the neccessory things

const createTaskButton = document.querySelector('#create-button');
const clearTasksButton = document.querySelector('#clear-tasks-button');
const taskInput = document.querySelector('#create-task-input');
const createTaskDiv = document.querySelector('#create-task-div');
const noTaskHeading = document.querySelector('#no-tasks');

// Make my localstorage here
const taskStorage = window.localStorage;

// Load tasks
function loadTasks() {
    let tasks1 = taskStorage.getItem('tasks');
    if(tasks1 == null) {
        return [];
    }
    else if(tasks1 == '') {
        return [];
    }
    else {
        return tasks1.split(',');
    }
}

function renderFirstTask(task) {
    let tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasks-container';
    
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    let taskCheckMark = document.createElement('div');
    taskCheckMark.classList.add('task-check-mark');

    let taskData = document.createElement('div');
    taskData.classList.add('task-data');

    let taskRemove = document.createElement('div');
    taskRemove.classList.add('task-remove');

    // Structure the elements
    taskRemove.innerHTML = '🗑'
    taskRemove.title = 'Trash';

    taskData.innerText = `${task}`;
    taskData.title = `${task}`;

    taskCheckMark.innerText = '✔';
    taskCheckMark.title = 'Finish Task';

    taskContainer.appendChild(taskCheckMark);
    taskContainer.appendChild(taskData);
    taskContainer.appendChild(taskRemove);

    tasksContainer.appendChild(taskContainer);

    // Render the elements
    createTaskDiv.insertAdjacentElement('beforebegin', tasksContainer);
}

// Create a tasks list
let tasks = loadTasks();
if(tasks.length != 0) {
    noTaskHeading.style.display = 'none';
    tasks.forEach((task, index) => {
        renderFirstTask(task);
    })
}

// Update local storage
function updateStorage(tasks) {
    console.log(tasks);
    taskStorage.setItem('tasks', tasks);
}

// Render task
function renderTask(task, tasks) {
    if(tasks.length == 1) {
        renderFirstTask(task);
    }
    else {
        let tasksContainer = document.querySelector('#tasks-container');

        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        let taskCheckMark = document.createElement('div');
        taskCheckMark.classList.add('task-check-mark');

        let taskData = document.createElement('div');
        taskData.classList.add('task-data');

        let taskRemove = document.createElement('div');
        taskRemove.classList.add('task-remove');

        // Structure the elements
        taskRemove.innerText = '🗑'
        taskRemove.title = 'Trash';

        taskData.innerText = `${task}`;
        taskData.title = `${task}`;

        taskCheckMark.innerText = '✔';
        taskCheckMark.title = 'Finish Task';

        taskContainer.appendChild(taskCheckMark);
        taskContainer.appendChild(taskData);
        taskContainer.appendChild(taskRemove);

        tasksContainer.appendChild(taskContainer);

        // Render the elements
        createTaskDiv.insertAdjacentElement('beforebegin', tasksContainer);
    }
}

// Create tasks
function createTask(task) {
    if(task != '') {
        tasks.push(task);
        updateStorage(tasks);
        renderTask(task, tasks);
        noTaskHeading.style.display = 'none';
    }
    else {
        alert('Task is empty! ');
    }
}

// Get and Create tasks
function getAndCreateTask() {
    const task = taskInput.value;
    createTask(task);
    taskInput.value = '';
}

// Clear tasks
function clearTasks() {
    let tasksContainer = document.querySelector('#tasks-container');
    let taskContainer = document.querySelectorAll('.task-container');
    tasks = [];
    updateStorage(tasks);
    if(noTaskHeading.style.display == 'none') {
        noTaskHeading.style.display = 'block';
    }
    tasksContainer.remove();
    taskContainer.forEach(task => {task.remove()});
}

// Done task

// Remove task
