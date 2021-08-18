localStorage.setItem('tasks', ['Do homework', 'Play', 'Complete To do list']);

function loadTasks() {
    if(localStorage.getItem('tasks') == null) {
        return []
    }
    else {
        return localStorage.getItem('tasks').split(',');
    }
}

function renderTask(task, tasksDiv) {
    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task')
    taskDiv.innerHTML = task;
    tasksDiv.appendChild(taskDiv);
}

function renderTasks(tasks) {
    var tasksDiv = document.createElement('div');
    var noTaskHeading = document.querySelector('#no-tasks');
    tasksDiv.id = 'tasks-container';

    var createTaskDiv = document.querySelector('#create-task-div');
    
    if(tasks.length != 0) {
        noTaskHeading.style.display = 'none';
    }

    tasks.forEach((task, index) => {
        renderTask(task, tasksDiv);
    });

    createTaskDiv.insertAdjacentElement('beforebegin', tasksDiv)
}

function createTask() {
    var taskInput = document.querySelector('#create-task-input');
    var noTaskHeading = document.querySelector('#no-tasks');
    var task = taskInput.value;
    var firstTask = false;
    tasks = []

    if(task != '') {
        if(noTaskHeading.style.display != 'none') {
            noTaskHeading.style.display = 'none';
        }
        taskInput.value = '';
    }
    else {
        alert('No task selected! ');
    }
}

tasks = loadTasks();
renderTasks(tasks);