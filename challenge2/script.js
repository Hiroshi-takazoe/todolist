const table = document.getElementById('task');
const addButton = document.getElementById('addButton');
const regex = /^\w+$/;
const working = "作業中";
const complete = "完了";
const todos = [];

addButton.addEventListener('click', () => {
  const comment = document.getElementById('comment').value;
  const isComment = regex.test(comment);
  if (isComment) {
    const todo = {
      task: comment,
      status: working
    };
    todos.push(todo);
    document.addForm.reset();
    displayTodos();
  }
});

const displayTodos = () => {
  const status = document.getElementsByName('status');
  if (status[0].checked) {
    const rows = table.insertRow(-1);
    const cell1 = rows.insertCell(-1);
    cell1.className = 'sequence';
    const idNumber = document.createTextNode(String(todos.length - 1));
    cell1.appendChild(idNumber);

    const cell2 = rows.insertCell(-1);
    const task = document.createTextNode(String(todos[todos.length - 1].task));
    cell2.appendChild(task);

    const cell3 = rows.insertCell(-1);
    const stateBtn = createStateBtn();
    cell3.appendChild(stateBtn);

    const cell4 = rows.insertCell(-1);
    const deletBtn = createDeletBtn();
    cell4.appendChild(deletBtn);
  }
}

const createStateBtn = () => {
  const statusButton = document.createElement('input');
  statusButton.type = 'button';
  statusButton.name = 'statusButton';
  statusButton.value = todos[todos.length - 1].status;
  statusButton.onclick = changeStatus;
  return statusButton;
}

const createDeletBtn = () => {
  const delButton = document.createElement('input');
  delButton.type = 'button';
  delButton.name = 'delButton';
  delButton.value = '削除';
  delButton.onclick = deleteTask;
  return delButton;
}
const deleteTask = event => {
  const tr = event.target.parentNode.parentNode;
  const text = event.target.parentNode.previousElementSibling.previousElementSibling.textContent;
  const index = todos.findIndex(({task}) => task === text);
  tr.remove();
  todos.splice(index, 1);
  reNumber();
}

const reNumber = () => {
  const tdNumber = document.getElementsByClassName('sequence');
  let idNumber = 0;
  for (let i = 0; i < todos.length; i++) {
    tdNumber[i].textContent = String(idNumber);
    idNumber++;
  }
}

const changeStatus = event => {
  const id = event.target.parentNode.previousElementSibling.previousElementSibling.textContent;
  const status = event.target.value;
  if (status === working) {
    todos[id].status = complete;
    event.target.setAttribute('value', complete);
  }else{
    todos[id].status = working;
    event.target.setAttribute('value', working);
  }
}
