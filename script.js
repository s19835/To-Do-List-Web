document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("todolist");
    const input = document.getElementById("task");
    const todolist = document.getElementById("todotasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    })
});

function addTask() {
    alert("task added");
}