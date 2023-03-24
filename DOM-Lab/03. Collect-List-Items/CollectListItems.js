function extractText() {
  var liList = document.querySelectorAll("#items li");
  var text = "";

  for (var i = 0; i < liList.length; i++) {
    text += liList[i].textContent + "\n";
  }
  
  document.getElementById("result").value = text;
}
