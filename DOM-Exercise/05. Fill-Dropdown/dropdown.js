function addItem() {
  const dropdown = document.getElementById("menu");
  const text = document.getElementById("newItemText").value;
  const value = document.getElementById("newItemValue").value;

  const option = document.createElement("option");
  option.text = text;
  option.value = value;
  dropdown.add(option);
  document.getElementById("newItemText").value = '';
  document.getElementById("newItemValue").value = '';

}
