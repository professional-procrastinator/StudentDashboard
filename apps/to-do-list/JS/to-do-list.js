function loadTasks() {
    if(localStorage.getItem('tasks') == []) {
        return [];
    }
    else {
        return localStorage.getItem('tasks').split(',');
    }
}

function storeTasks(task, tasks) {
    tasks.push(task);
    localStorage.setItem('tasks', tasks);
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
    createTaskDiv.insertAdjacentElement('beforebegin', tasksDiv);
}

tasks = loadTasks();
renderTasks(tasks);

function createTask() {
    var taskInputBox = document.querySelector('#create-task-input');
    var tasksDiv = document.querySelector('#tasks-container');
    var task = taskInputBox.value;
    if(task != '') {
        renderTask(task, tasksDiv);
        storeTasks(task, tasks);
        taskInputBox.value = '';
    }
    else {
        alert('No task selected');
    }
}