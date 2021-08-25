const taskForm = document.querySelector('.to-do-form');
const list = document.querySelector('.list');

// Array for tasks
let tasks = [];

function handleSubmit(event) {
    event.preventDefault();
    const name = event.currentTarget.item.value;
    
    if (!name) return;

    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    // Push the items into our array
    tasks.push(item);
    // Clear the form
    event.target.reset();
    displayItems();
}

function displayItems() {
    const html = tasks
        .map(
            item => `<li class="task-item">
            <input type='checkbox'>
            <span class='itemName'>${item.name}</span>
            <button aria-label='Remove ${item.name}'>&times;</button>
        </li>`
        ).join('')
    list.innerHTML = html;
}

taskForm.addEventListener('submit', handleSubmit);