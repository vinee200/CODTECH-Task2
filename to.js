document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const dueDateInput = document.getElementById('due-date');
    const addTaskButton = document.getElementById('add-task-button');
    const searchTaskInput = document.getElementById('search-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        addTask();
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    searchTaskInput.addEventListener('input', () => {
        filterTasks();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = `${taskText} (Due: ${dueDate})`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
    }

    function filterTasks() {
        const searchText = searchTaskInput.value.toLowerCase();
        const tasks = taskList.getElementsByTagName('li');

        Array.from(tasks).forEach(task => {
            const taskText = task.textContent.toLowerCase();
            if (taskText.includes(searchText)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
