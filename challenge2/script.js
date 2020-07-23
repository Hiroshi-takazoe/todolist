const table = document.getElementById("task");
const addButton = document.getElementById("addButton");
const todos = [];

addButton.addEventListener("click", function() {
  let comment = document.getElementById("comment").value;
  let todo = {
    task: comment,
    status: "作業中"
  };
  todos.push(todo);
  document.addForm.reset();
  displayTodos();
});



function displayTodos() {
  const status = document.getElementsByName("status");
  if (status[0].checked) {
    let rows = table.insertRow(-1);
    let cell1 = rows.insertCell(-1);
    cell1.className = "sequence";
    let idNumber = document.createTextNode(todos.length - 1);
    cell1.appendChild(idNumber);

    let cell2 = rows.insertCell(-1);
    let task = document.createTextNode(todos[todos.length - 1].task);
    cell2.appendChild(task);

    let cell3 = rows.insertCell(-1);
    let statusButton = document.createElement("input");
    statusButton.type = "button";
    statusButton.name = "statusButton";
    statusButton.value = todos[todos.length - 1].status;
    cell3.appendChild(statusButton);

    let cell4 = rows.insertCell(-1);
    let delButton = document.createElement("input");
    delButton.type = "button";
    delButton.name = "delButton";
    delButton.value = "削除";
    cell4.appendChild(delButton);
    delButton.onclick = deleteTask;
  };
}

function deleteTask(event) {
  let tr = event.target.parentNode.parentNode;
  let text = this.parentNode.previousElementSibling.previousElementSibling.textContent;
  let index = todos.findIndex(({task}) => task === text);
  tr.remove();
  todos.splice(index, 1);
  reNumber();

}

function reNumber(){
  let tdNumber =document.getElementsByClassName("sequence");
  let idNumber = 0;
  for (var i = 0; i < todos.length; i++){
    let newIdNumber = document.createTextNode(idNumber);
    tdNumber[i].textContent = idNumber;
    idNumber++;
  }
}
