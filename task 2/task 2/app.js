// Select elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = taskText;

    const completeButton = document.createElement('input');
    completeButton.type = 'checkbox';
    completeButton.addEventListener('change', function () {
        li.classList.toggle('completed');
    });

    // Edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function () {
        editTask(span, editButton);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = ''; // Clear input
}

// Edit task function
function editTask(span, editButton) {
    if (editButton.innerText === 'Edit') {
        const currentText = span.innerText;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        span.replaceWith(input);
        editButton.innerText = 'Save';

        // Save the edited task
        editButton.addEventListener('click', function () {
            if (editButton.innerText === 'Save') {
                const updatedText = input.value;
                span.innerText = updatedText;
                input.replaceWith(span);
                editButton.innerText = 'Edit';
            }
        });
    }
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Add task on pressing "Enter"
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
