window.addEventListener("load", solve);

function solve() {
  const savedContainer = document.querySelector("#saved-hits .saved-container");
  const totalLikes = document.querySelector(".likes p");
  const likeBtn = document.querySelector(".likes img");
  const genreInput = document.querySelector("#genre");
  const nameInput = document.querySelector("#name");
  const authorInput = document.querySelector("#author");
  const dateInput = document.querySelector("#date");
  const addBtn = document.querySelector("#add-btn");
  const allHitsContainer = document.querySelector("#all-hits .all-hits-container");
  const saveBtn = document.querySelector("#save-btn")
  let likes = 0; // initialize likes to 0

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

    const authorHeader = document.createElement("h2");
    authorHeader.textContent = "Author: " + author;

    const dateHeader = document.createElement("h3");
    dateHeader.textContent = "Date: " + date;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save song";
    saveBtn.id = "save-btn";

    const likeBtn = document.createElement("button");
    likeBtn.textContent = "Like song";
    likeBtn.id = "like-btn";
    likeBtn.dataset.likes = 0;

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

    // Add event listener to the like button

    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
    
      const hitsInfoContainer = document.createElement("div");
     
    
      const savedHitsInfo = hitsInfo.cloneNode(true);
    
      const likeBtn = savedHitsInfo.querySelector("#like-btn");
      likeBtn.remove();
      const deleteBtn = savedHitsInfo.querySelector("#delete-btn");
      deleteBtn.remove();
      const saveBtn = savedHitsInfo.querySelector("#save-btn");
      saveBtn.remove();

    
      const deleteBtnClone = deleteBtn.cloneNode(true);
      
      deleteBtnClone.classList.add("delete-btn");
    
      savedHitsInfo.appendChild(deleteBtnClone);
    
      hitsInfoContainer.appendChild(savedHitsInfo);
    
      savedContainer.appendChild(hitsInfoContainer); 

      const totalLikesCount = parseInt(totalLikes.textContent) + parseInt(likeBtn.dataset.likes);
      totalLikes.textContent = totalLikesCount;


      deleteBtnClone.addEventListener("click", function () {
      savedHitsInfo.remove();
    });
    
      hitsInfo.remove();

    });

    likeBtn.addEventListener("click", function () {
      const currentLikes = parseInt(likeBtn.dataset.likes);
      likeBtn.dataset.likes = currentLikes + 1;
      likeBtn.textContent = `Like song (${likeBtn.dataset.likes})`;
    
      likes++;
      totalLikes.textContent = likes + " Likes";
    });

    deleteBtn.addEventListener("click", function () {
      hitsInfo.remove();
    });
});







}