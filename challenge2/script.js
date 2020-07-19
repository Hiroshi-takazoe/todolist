const table = document.getElementById("task");
const addButton = document.getElementById("addButton");
const todos = [];
let todoslength = 0;

addButton.addEventListener("click", function() {
  let comment = document.getElementById("comment").value;
  let todo = {
    task: comment,
    status: "作業中"
  };
  todos.push(todo);
  document.addForm.reset();
  todoslength = todos.length;
  displayTodos();
});

function displayTodos() {
  const status = document.getElementsByName("status");
  if (status[0].checked) {
    let rows = table.insertRow(-1);
    let cell1 = rows.insertCell(-1);
    let idNumber = document.createTextNode(todoslength - 1);
    cell1.appendChild(idNumber);

    let cell2 = rows.insertCell(-1);
    let task = document.createTextNode(todos[todoslength - 1].task);
    cell2.appendChild(task);

    let cell3 = rows.insertCell(-1);
    let statusButton = document.createElement("input");
    statusButton.type = "button";
    statusButton.name = "statusButton";
    statusButton.value = todos[todoslength - 1].status;
    cell3.appendChild(statusButton);

    let cell4 = rows.insertCell(-1);
    let delButton = document.createElement("input");
    delButton.type = "button";
    delButton.name = "delButton";
    delButton.value = "削除";
    cell4.appendChild(delButton);
  };
}
