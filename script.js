const addButton = document.getElementById('button');
const taskInput = document.getElementById('input');
const taskList = document.getElementById('list');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerText = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    createDeleteButton(taskItem);
  }
}

function createDeleteButton(taskItem) {
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);
}
