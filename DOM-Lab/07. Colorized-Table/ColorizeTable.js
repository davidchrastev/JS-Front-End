function colorize() {
    var table = document.querySelector("table");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i += 2) {
      rows[i].style.backgroundColor = "Teal";
    }
}

function reverse() {
    var table = document.querySelector("table");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i += 2) {
      rows[i].style.backgroundColor = "White";
    }
}