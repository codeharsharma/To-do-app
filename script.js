const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn">Delete</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="task-info">${priority} Priority | Due: ${dueDate}</span>
            <span class="delete-btn">Delete</span>
            <input type="checkbox" class="complete-checkbox">
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        dueDateInput.value = "";
    }
}

// Handle task completion
taskList.addEventListener("change", (event) => {
    if (event.target.classList.contains("complete-checkbox")) {
        const li = event.target.parentElement;
        li.classList.toggle("completed", event.target.checked);
    }
});
