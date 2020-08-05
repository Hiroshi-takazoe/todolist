const table = document.getElementById('task');
const addButton = document.getElementById('addButton');
const regex = /^\s+$/;
const working = '作業中';
const complete = '完了';
const status = document.getElementsByName('status');
const todos = [];

status[0].addEventListener('click', () => {
    for (i = 1; i <= todos.length; i++) {
    table.rows[i].style.display = "";
  }
});

status[1].addEventListener('click', () => {
    for (let i = 1; i <= todos.length; i++) {
    let tableRow = table.rows[i];
    let isStatus = table.children[0].children[i].children[2].children[0].value;
    if (isStatus === "完了") {
      tableRow.style.display = "none";
    } else if (isStatus === "作業中") {
      tableRow.style.display = "";
    }
  }
});

status[2].addEventListener('click', () => {
  for (let i = 1; i <= todos.length; i++) {
    let tableRow = table.rows[i];
    let isStatus = table.children[0].children[i].children[2].children[0].value;
    if (isStatus === "作業中") {
      tableRow.style.display = "none";
    } else if (isStatus === "完了") {
      tableRow.style.display = "";
    }
  }
});

addButton.addEventListener('click', () => {
  const comment = document.getElementById('comment').value;
  const isComment = regex.test(comment);
  if (isComment || comment === '') {
    return false;
  } else {
    const todo = {
      task: comment,
      status: working
    };
    todos.push(todo);
    document.addForm.reset();
    if (status[0].checked) {
      displayTodos();
    } else if (status[1].checked) {
      displayTodos();
    } else {
      displayTodos();
      table.rows[todos.length].style.display = "none";
    }
  }
});

const displayTodos = () => {
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
  const deleteBtn = createDeleteBtn();
  cell4.appendChild(deleteBtn);
}

const createStateBtn = () => {
  const stateBtn = document.createElement('input');
  stateBtn.type = 'button';
  stateBtn.name = 'stateBtn';
  stateBtn.value = todos[todos.length - 1].status;
  stateBtn.onclick = changeStatus;
  return stateBtn;
}

const createDeleteBtn = () => {
  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.name = 'deleteBtn';
  deleteBtn.value = '削除';
  deleteBtn.onclick = deleteTask;
  return deleteBtn;
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
  } else {
    todos[id].status = working;
    event.target.setAttribute('value', working);
  }
}
