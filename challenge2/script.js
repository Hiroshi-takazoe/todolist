const table = document.getElementById('task');
const addButton = document.getElementById('addButton');
const todos = [];

addButton.addEventListener('click', function() {
  const comment = document.getElementById('comment').value;
  const todo = {
    task: comment,
    status: '作業中'
  };
  todos.push(todo);
  document.addForm.reset();
  displayTodos();
});

function displayTodos() {
  const status = document.getElementsByName('status');
  if (status[0].checked) {
    const rows = table.insertRow(-1);
    const cell1 = rows.insertCell(-1);
    cell1.className = 'sequence';
    const idNumber = document.createTextNode(todos.length - 1);
    cell1.appendChild(idNumber);

    const cell2 = rows.insertCell(-1);
    const task = document.createTextNode(todos[todos.length - 1].task);
    cell2.appendChild(task);

    const cell3 = rows.insertCell(-1);
    const stateBtn = createStateBtn();
    cell3.appendChild(stateBtn);

    const cell4 = rows.insertCell(-1);
    const deletBtn = createDeletBtn();
    cell4.appendChild(deletBtn);
  }
}

function createStateBtn() {
  const statusButton = document.createElement('input');
  statusButton.type = 'button';
  statusButton.name = 'statusButton';
  statusButton.value = todos[todos.length - 1].status;
  return statusButton;
}

function createDeletBtn() {
  const delButton = document.createElement('input');
  delButton.type = 'button';
  delButton.name = 'delButton';
  delButton.value = '削除';
  delButton.onclick = deleteTask;
  return delButton;
}

function deleteTask(event) {
  const tr = event.target.parentNode.parentNode;
  const text = this.parentNode.previousElementSibling.previousElementSibling.textContent;
  const index = todos.findIndex(({task}) => task === text);
  tr.remove();
  todos.splice(index, 1);
  reNumber();
}

function reNumber() {
  const tdNumber = document.getElementsByClassName('sequence');
  let idNumber = 0;
  for (var i = 0; i < todos.length; i++) {
    tdNumber[i].textContent = idNumber;
    idNumber++;
  }
}
