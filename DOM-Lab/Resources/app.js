window.addEventListener("load", solve);

function solve() {
  const savedContainer = document.querySelector("#saved-hits");
  const totalLikes = document.querySelector(".likes p");
  const likeBtn = document.querySelector(".likes img");
  const genreInput = document.querySelector("#genre");
  const nameInput = document.querySelector("#name");
  const authorInput = document.querySelector("#author");
  const dateInput = document.querySelector("#date");
  const addBtn = document.querySelector("#add-btn");
  const allHitsContainer = document.querySelector("#all-hits .all-hits-container");
  

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  const genre = genreInput.value;
  const name = nameInput.value;
  const author = authorInput.value;
  const date = dateInput.value;
  
  if (!genre || !name || !author || !date) {
    return; 
  }
  
  const hitsInfo = document.createElement("div");
  hitsInfo.classList.add("hits-info");
  
  const image = document.createElement("img");
  image.src = "./static/img/img.png";
  
  const genreHeader = document.createElement("h2");
  genreHeader.textContent = "Genre: " + genre;
  
  const nameHeader = document.createElement("h2");
  nameHeader.textContent = "Name: " + name;
  
  const authorHeader = document.createElement("h3");
  authorHeader.textContent = author;
  
  const dateHeader = document.createElement("h3");
  dateHeader.textContent = date;
  
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save song";
  saveBtn.id = "save-btn";
  
  const likeBtn = document.createElement("button");
  likeBtn.textContent = "Like song";
  likeBtn.id = "like-btn";
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.id = "delete-btn";
  
  hitsInfo.appendChild(image);
  hitsInfo.appendChild(genreHeader);
  hitsInfo.appendChild(nameHeader);
  hitsInfo.appendChild(authorHeader);
  hitsInfo.appendChild(dateHeader);
  hitsInfo.appendChild(saveBtn);
  hitsInfo.appendChild(likeBtn);
  hitsInfo.appendChild(deleteBtn);
  
  allHitsContainer.appendChild(hitsInfo);
  
  // Clear input fields
  genreInput.value = "";
  nameInput.value = "";
  authorInput.value = "";
  dateInput.value = "";
});

}
