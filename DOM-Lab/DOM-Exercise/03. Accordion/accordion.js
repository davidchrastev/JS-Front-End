function toggle() {
  var extraDiv = document.getElementById("extra");
  var button = document.getElementsByClassName("button")[0];
  if (extraDiv.style.display === "none") {
    extraDiv.style.display = "block";
    button.innerHTML = "Less";
  } else {
    extraDiv.style.display = "none";
    button.innerHTML = "More";
  }
}
