const taskForm = document.querySelector('.to-do-form');
const list = document.querySelector('.list');

// Array for items
let items = [];

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
    items.push(item);
    // Clear the form
    event.target.reset();
    // fire off a custom event
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items
        .map(
            item => `<li class="task-item">
            <input type='checkbox'>
            <span class='itemName'>${item.name}</span>
            <button class='remove-buttons' value='${item.id}' aria-label='Remove ${item.name}'>&times;</button>
        </li>`
        ).join('')
    list.innerHTML = html;
}

function updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems == null) return;
    if(lsItems.length) {
        items = lsItems;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

taskForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', updateLocalStorage);
list.addEventListener('click', function(e) {
    if(e.target.matches('.remove-buttons')) {
        deleteItem(parseInt(e.target.value));
    }
})
restoreFromLocalStorage();