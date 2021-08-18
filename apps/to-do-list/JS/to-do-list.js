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