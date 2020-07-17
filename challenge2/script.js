const table = document.getElementById("task");


function addRow() {
  const rowNumber = table.rows.length;
  let id = rowNumber - 1;
  let comment = document.getElementById("comment").value;

  let rows = table.insertRow(-1);
  let cell1 = rows.insertCell(-1);
  let cell2 = rows.insertCell(-1);
  let cell3 = rows.insertCell(-1);
  let cell4 = rows.insertCell(-1);

  cell1.innerHTML = id;
  cell2.innerHTML = comment;
  cell3.innerHTML = '<input type="button" name="statusButton" value="作業中">';
  cell4.innerHTML = '<input type="button" name="delButton" value="削除" onclick="">'
  document.addForm.reset();
}
