document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("todolist");
    const input = document.getElementById("task");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    })
});

function addTask(task) {
    const todolist = document.getElementById("todotasks");
    const archive = document.getElementById("archive");
    const list = document.createElement('li');
    list.innerText = task;

    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    checkButton.textContent = '✔';
    checkButton.addEventListener('click', () => {
        list.classList.toggle('completed');
        const archiveList = document.createElement('li');
        archiveList.textContent = task;
        archive.appendChild(archiveList);
        todolist.removeChild(list);
    });

    deleteButton.textContent = '✘'
    deleteButton.addEventListener('click', () => {
        todolist.removeChild(list);
    })


    list.appendChild(checkButton);
    list.appendChild(deleteButton);
    todolist.appendChild(list);
}