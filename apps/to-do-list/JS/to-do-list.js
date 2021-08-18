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
    
}

tasks = loadTasks();
renderTasks(tasks);