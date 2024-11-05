document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById('task-list');

    // Create a new list item
    let li = document.createElement('li');

    // Create checkbox to mark task as completed
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskSpan.classList.add('completed');
        } else {
            taskSpan.classList.remove('completed');
        }
    });

    // Create a span to hold the task text
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    li.appendChild(checkbox);
    li.appendChild(taskSpan);

    // Add buttons: Edit and Delete
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Edit button
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function () {
        toggleEditTask(taskSpan, editBtn);
    });

    // Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field after adding task
}

function toggleEditTask(taskSpan, editBtn) {
    if (editBtn.textContent === "Edit") {
        // Enable editing: Replace the span with an input field
        let currentText = taskSpan.textContent;
        let inputField = document.createElement('input');
        inputField.type = "text";
        inputField.value = currentText;
        inputField.classList.add('edit-input');
        taskSpan.replaceWith(inputField);
        editBtn.textContent = "Save";
    } else {
        // Save the edited task: Replace the input field with a span
        let inputField = document.querySelector('.edit-input');
        let updatedText = inputField.value.trim();

        if (updatedText !== "") {
            let newSpan = document.createElement('span');
            newSpan.textContent = updatedText;
            inputField.replaceWith(newSpan);
            editBtn.textContent = "Edit";
        } else {
            alert("Task cannot be empty!");
        }
    }
}
