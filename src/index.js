const taskInput = document.getElementsByClassName('task_input')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

const addTasks = (task) => {
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'task_button';
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  const completeButton = document.createElement('button');
  completeButton.className = 'task_button';
  completeButton.innerHTML = 'Complete';
  listItem.appendChild(completeButton);

  deleteButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });

  completeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    completeTasks(completeButton);
  });
};

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

const completeTasks = (completeButton) => {
  const chosenTask = completeButton.closest('li');
  chosenTask.classList.add('complete');
  chosenTask.removeChild(completeButton);
};

taskSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
  const task = taskInput.value;

  if (task === '') {
    window.alert('タスクを入力してください');
    return;
  }

  addTasks(task);

  taskInput.value = '';
});
