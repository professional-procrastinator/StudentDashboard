// Select all of the neccessory things

const createTaskButton = document.querySelector('#create-button');
const clearTasksButton = document.querySelector('#clear-tasks-button');
const taskInput = document.querySelector('#create-task-input');
const createTaskDiv = document.querySelector('#create-task-div');

// Create a tasks list
let tasks = [];

// Make my localstorage here
const taskStorage = window.localStorage;

// Update local storage
function updateStorage(tasks) {
    taskStorage.setItem('tasks', tasks);
}

// Render task
function renderTask(task, tasks) {
    if(tasks.length == 1) {
        // Make elements
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
    else {
        let tasksContainer = document.querySelector('#tasks-container')

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
    }
    else {
        alert('Task is empty! ');
    }
}

// Get tasks
function getAndCreateTask() {
    const task = taskInput.value;
    createTask(task);
}

// Clear tasks

// Done task

// Remove task
