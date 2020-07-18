const table = document.getElementById("task");
const addButton = document.getElementById("addButton");


addButton.addEventListener("click", addRow);

function addRow() {
  const rowNumber = table.rows.length;
  let id = rowNumber - 1;
  let comment = document.getElementById("comment").value;

  let rows = table.insertRow(-1);
  let cell1 = rows.insertCell(-1);
  let idNumber = document.createTextNode(id);
  cell1.appendChild(idNumber);

  let cell2 = rows.insertCell(-1);
  let addComment = document.createTextNode(comment);
  cell2.appendChild(addComment);

  let cell3 = rows.insertCell(-1);
  let statusButton = document.createElement("input");
  statusButton.type = "button";
  statusButton.name = "statusButton";
  statusButton.value = "作業中";
  cell3.appendChild(statusButton);

  let cell4 = rows.insertCell(-1);
  let delButton = document.createElement("input");
  delButton.type = "button";
  delButton.name = "delButton";
  delButton.value = "削除";
  cell4.appendChild(delButton);

  document.addForm.reset();
}
