window.addEventListener("load", solve);

// Always use array from to transform a collection -> querySelectorAll, children

function solve() {
    let totalLikes = 0;

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