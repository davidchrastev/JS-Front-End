function addItem() {
    var input = document.getElementById("newItemText");
    var inputValue = input.value;

    var itemList = document.getElementById("items");
    var newItem = document.createElement("li");
    newItem.textContent = inputValue;
    itemList.appendChild(newItem);

    input.value = "";

}