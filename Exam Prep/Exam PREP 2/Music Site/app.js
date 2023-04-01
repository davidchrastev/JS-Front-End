window.addEventListener("load", solve);
// Always use array from to transform a collection -> querySelectorAll, children

function solve() {
    let totalLikes = 0;
    const transition = {
        genre: null,
        name: null,
        author: null,
        date: null,
    }
    const inputDOMSelectors = {
        genre: document.querySelector('input[name="genre"]'),
        name: document.querySelector('input[name="name"]'),
        author: document.querySelector('input[name="author"]'),
        date: document.querySelector('input[name="date"]'),
    };
    const otherDOMSelectors = {
        addBtn: document.getElementById('add-btn'),
        allHitsContainer: document.querySelector(' .all-hits-container'),
        savedContainer: document.querySelector(' .saved-container'),
        totalLikesContainer: document.querySelector(' .likes > p'),
    }
    otherDOMSelectors.addBtn.addEventListener('click', addSongHandler);

    function addSongHandler(event) {
        event.preventDefault();
        let allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            console.log('NOT VALID');
            return;
        }

        const songContainer = createElement('div', otherDOMSelectors.allHitsContainer, '', ['hits-info']);
        const { genre, name, author, date} = inputDOMSelectors;
        createElement('img', songContainer, null, null, null, {src: './static/img/img.png'});
        createElement('h2', songContainer, `Genre: ${genre.value}`);
        createElement('h2', songContainer, `Name: ${name.value}`);
        createElement('h2', songContainer, `Author: ${author.value}`);
        createElement('h3', songContainer, `Date: ${date.value}`);
        const saveBtn = createElement('button', songContainer, 'Save song', ['save-btn']);
        const likeBtn = createElement('button', songContainer, 'Like song', ['like-btn']);
        const deleteBtn = createElement('button', songContainer, 'Delete', ['delete-btn']);
        saveBtn.addEventListener('click', saveSongHandler);
        likeBtn.addEventListener('click', likeSongHandler);
        deleteBtn.addEventListener('click', deleteSongHandler);
        transition.genre = inputDOMSelectors.genre.value;
        transition.name = inputDOMSelectors.name.value;
        transition.date = inputDOMSelectors.date.value;
        transition.author = inputDOMSelectors.author.value;
        clearInput();

    }
    function saveSongHandler() {
        const songRef = this.parentNode;
        const saveBtn = songRef.querySelector('.save-btn');
        const likeBtn = songRef.querySelector('.like-btn');
        otherDOMSelectors.savedContainer
            .appendChild(songRef);
        saveBtn.remove();
        likeBtn.remove();

    }
    function deleteSongHandler() {
        this.parentNode.remove();
    }
    function likeSongHandler() {
        this.setAttribute('disabled', true);
        totalLikes++;
        otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`
    }
    function clearInput() {
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.value = '';
            });
    }
    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // { src: 'link', href: 'http' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}