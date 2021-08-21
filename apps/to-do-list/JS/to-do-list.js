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
    var checkMark = document.createElement('div');
    var taskInnerDiv = document.createElement('div');


    checkMark.classList.add('task-checkmark');
    taskDiv.classList.add('task');
    taskInnerDiv.classList.add('task-text')

    taskInnerDiv.innerText = task;
    checkMark.innerText = '✔';

    checkMark.title = 'Done';

    taskDiv.appendChild(checkMark)
    taskDiv.appendChild(taskInnerDiv);

    console.log(tasksDiv);
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

var tasks = loadTasks();
renderTasks(tasks);

function clearTasks() {
    if(tasks.length == 0) {
        alert('There are no tasks to be cleared');
    }
    else {
        tasks = []
        var tasksDiv = document.querySelector('#tasks-container');
        var noTaskHeading = document.querySelector('#no-tasks');
        localStorage.setItem('tasks', []);
        tasksDiv.remove();
        noTaskHeading.style.display = 'block';
    }
}

function createTask() {
    var taskInputBox = document.querySelector('#create-task-input');
    var tasksDiv = document.querySelector('#tasks-container');
    var noTaskHeading = document.querySelector('#no-tasks');
    var task = taskInputBox.value;
    if(task != '') {
        if(tasks.length == 0) {
            noTaskHeading.style.display = 'none';
            var NewtasksDiv = document.createElement('div');
            NewtasksDiv.id = 'tasks-container';
        }
        renderTask(task, tasksDiv);
        if (tasks.length == 0) {
            var createTaskDiv = document.querySelector('#create-task-div');
            createTaskDiv.insertAdjacentElement('beforebegin', NewtasksDiv);
        }
        storeTasks(task, tasks);
        taskInputBox.value = '';
    }
    else {
        alert('No task selected');
    }
}