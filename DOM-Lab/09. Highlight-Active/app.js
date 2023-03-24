function focused() {
  const divs = document.querySelectorAll("div");
  const inputs = document.querySelectorAll("input");

  Array.from(inputs).forEach((input) => {
    input.addEventListener("focus", (event) => {
      const parentDiv = event.target.parentNode;
      Array.from(divs).forEach((div) => {
        if (div === parentDiv) {
          div.classList.add("focused");
        } else {
          div.classList.remove("focused");
        }
      });
    });

    input.addEventListener("blur", (event) => {
      const parentDiv = event.target.parentNode;
      parentDiv.classList.remove("focused");
    });
  });
}
