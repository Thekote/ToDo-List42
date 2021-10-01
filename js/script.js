let todos = [];

// Save toDo to Local Storage
function saveTodo(todo) {
    localStorage.setItem('todos', JSON.stringify(todos));
   
}

function renderTodo(todo){   
    const list = document.querySelector('.js-todo-list');
    const item = document.querySelector(`[data-key='${todo.id}]`);

    if (todo.deleted) {
        item.remove();
        if (todos.length === 0) list.innerHTML = '';
        return
    }
    
    const isChecked = todo.checked ? 'done': '';
    const li = document.createElement("li");
    li.setAttribute('class', `todo-item ${isChecked}`);
    li.setAttribute('data-key', todo.id);
    li.innerHTML = `
        <div class="todo-description">
            <input id="${todo.id}" type="checkbox"/></button>
            <label for="${todo.id}" class="tick js-tick">${todo.description}</label>
        </div>
        <button class="todo-delete-button">×</button>
    `;
    
    if (item) {
        list.replaceChild(li, item);
    } else {
        list.append(li);
    }
}

function addTodo(description) {
    const todo = {
        description,
        checked: false,
        id: Date.now(),
    };
    todos.push(todo);
    saveTodo(todo);
    renderTodo(todo);
}


function toggleCompleted(key) {
    const index = todos.findIndex(item => item.id === Number(key));
    todos[index].checked = !todos[index].checked;
    addTodo(todos[index]);
    renderTodo(todos[index]);
}


function deleteTodo(key) {
    const index = todos.findIndex(item => item.id === Number(key));
    const todo = {
        deleted: true,
        ...todos[index]
    };
    todos = todos.filter(item => item.id !== Number(key));
    addTodo(todo);
    renderTodo(todo);
}

const form = document.querySelector('.todo-form');
form.addEventListener ('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');
    const description = input.value.trim();
    if (description !== ''){
        addTodo(description);
        input.value = '';
        input.focus();
    } else {
        alert("Descrição ou Deadline não podem ser vazios!!");
    }
    
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleCompleted(itemKey);
    }

    if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('todos');
    if (ref) {
        todos = JSON.parse(ref);
        todos.forEach(t => {
            renderTodo(t);
        });
    }
});
