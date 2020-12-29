const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const todoTasks = document.querySelector('.todo-tasks');

let tasks =[];


form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(input.value);
});

todoTasks.addEventListener('click', (event) => {

console.log(event.target.classList);

    if(event.target.classList.value == 'todo-checkbox'){
        complete(event.target.parentElement.getAttribute('data-key'));
    }

    if(event.target.classList.value == 'todo-delete-button'){
        deleteTask(event.target.parentElement.getAttribute('data-key'));
    }

});

function complete(id){
    tasks.forEach((item) => {
        if(item.id == id){
            item.completed = !item.completed;
        }
    });

    addToLocalStorage(tasks);
}

function deleteTask(id){
    tasks = tasks.filter((item) => {
        return item.id != id;
    });
    addToLocalStorage(tasks);
}

function addTask(item){

    console.log(item);
    if(item){
        console.log("if");
        const task = {
            id: Date.now(),
            name: item,
            completed: false
        }
        tasks.push(task);
        console.log(task);
    }else {alert("write something");}

    
    addToLocalStorage(tasks);

    input.value = '';

}

function renderTasks(tasks){
    
    todoTasks.innerHTML = '';
    tasks.forEach((item) => {
        const checked = item.completed ? 'checked' : null;
        const li = document.createElement('li');
        li.setAttribute('class', 'task');
        li.setAttribute('data-key', item.id);

        if(item.completed === true){
            li.classList.add('checked');
        }
        
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${checked}>
            ${item.name}
            <button class="todo-delete-button">X</button>`;

        todoTasks.append(li);

    });
}

function addToLocalStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
}

function getFromLocalStorage(){
    const temp = localStorage.getItem('tasks');
    if(temp){
        tasks = JSON.parse(temp);
        renderTasks(tasks);
    }
}

getFromLocalStorage();