function addItem() {
  var input = document.getElementById("newItemText");
  var inputValue = input.value;

  var itemList = document.getElementById("items");
  var newItem = document.createElement("li");
  newItem.textContent = inputValue;

  // Add delete button next to new item
  var deleteButton = document.createElement("a");
  deleteButton.textContent = "[Delete]";
  deleteButton.href = "#";
  deleteButton.addEventListener("click", function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
  newItem.appendChild(deleteButton);
  itemList.appendChild(newItem);

  input.value = "";
}
