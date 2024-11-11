document.addEventListener('DOMContentLoaded', function () {
    loadTasksFromLocalStorage();
});

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();  // Prevent form submission
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTaskToList(taskText);
            saveTaskToLocalStorage(taskText);
            taskInput.value = "";  // Clear input field
        }
    }
});

// Function to add task to list
function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "&#10006;";
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);  // Remove task from localStorage
    });

    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = "&#10004;";
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', function () {
        taskSpan.style.textDecoration = "line-through";  // Mark task as completed
    });

    // Append task and buttons to list item
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add list item to the task list
    taskList.appendChild(li);
}

// Save task to localStorage
function saveTaskToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);  // Remove the task
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Update localStorage
}
