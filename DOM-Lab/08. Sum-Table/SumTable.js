function sumTable() {
  var sum = 0;
  var rows = document.getElementsByTagName("tr");
  for (var i = 1; i < rows.length - 1; i++) {
    var cells = rows[i].getElementsByTagName("td");
    sum += parseFloat(cells[1].textContent);
  }
  document.getElementById("sum").textContent = sum.toFixed(2);
}

function addProduct() {
  var product = document.getElementById("product-input").value;
  var cost = document.getElementById("cost-input").value;

  var tableBody = document.getElementById("table-body");
  var newRow = document.createElement("tr");
  var productCell = document.createElement("td");
  var costCell = document.createElement("td");

  productCell.textContent = product;
  costCell.textContent = cost;

  newRow.appendChild(productCell);
  newRow.appendChild(costCell);

  tableBody.appendChild(newRow);

  document.getElementById("product-input").value = "";
  document.getElementById("cost-input").value = "";
}
