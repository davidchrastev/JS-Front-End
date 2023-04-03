function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputDOMSelectors = {
        title: document.getElementById('title'),
    }
    const otherDOMSelectors = {
        addBtn: document.getElementById('add-button'),
        loadBtn: document.getElementById('load-button'),
        taskContainer: document.getElementById('todo-list'),
    }

    otherDOMSelectors.loadBtn.addEventListener('click', loadTasks);
    otherDOMSelectors.addBtn.addEventListener('click', addProductHandler);

    let currentTasks = [];
    function loadTasks(event) {
        event.preventDefault();
        otherDOMSelectors.taskContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((allTasks) => {
                currentTasks = Object.values(allTasks);
                console.log(currentTasks);
                for (const task of currentTasks) {
                   const li = createElement('li', otherDOMSelectors.taskContainer);
                   createElement('span', li, task.title);
                   createElement('button', li, 'Remove');
                   createElement('button', li, 'Edit');
                }
            });
    }

    function addProductHandler(event) {
        if (event) {
            event.preventDefault();
        }
        const { title } = inputDOMSelectors;
        const payload = JSON.stringify({
            name: title.value,
        });
        const httpHeaders = {
            method: 'POST',
            body: payload
        };

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                inputDOMSelectors.title.value = '';
                loadTasks();
            })
            .catch((err) => {
                console.error(err);
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

attachEvents();
