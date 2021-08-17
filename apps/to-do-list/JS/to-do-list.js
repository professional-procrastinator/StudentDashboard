function createTask() {
    var noTask = document.querySelector('#no-tasks');
    var taskInput = document.querySelector('#create-task-input');
    var task = taskInput.value;
    if(task != '') {
        noTask.style.display = 'none';
        console.log(task);
    }
    else {
        alert('No task selected! ');
    }
}