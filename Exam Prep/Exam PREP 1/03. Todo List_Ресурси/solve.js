function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const input = document.getElementById('title');
    const addBTN = document.getElementById('add-button');
    const loadBTN = document.getElementById('load-button');

    const container = document.getElementById('todo-list');

    loadBTN.addEventListener('click', loadTasks);
    addBTN.addEventListener('click', addTask);
    let currentTasks = [];
    function loadTasks(event) {
        if (event) {
            event.preventDefault();
        }
        container.innerHTML = '';

        fetch(BASE_URL)
            .then((response) => response.json())
            .then((tasks) => {
                currentTasks = Object.values(tasks);
                for ( const {name, _id} of currentTasks) {
                    const li = createElement('li', container, null, null, _id);
                    createElement('span', li, `${name}`);
                    const removeBtn = createElement('button', li, 'Remove');
                    const editBtn = createElement('button', li, 'Edit');

                    removeBtn.addEventListener('click', remove);
                    editBtn.addEventListener('click', edit);

                }
            })
            .catch(err => {
                console.error(err);
            });
    }
    function remove(event) {
        let parent = event.currentTarget.parentNode;
        let id = parent.id;

        const httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadTasks();
            }).catch(err => {
                console.error(err);
        })
    }
    function addTask(event) {
        if (event) {
            event.preventDefault();
        }

        const payload = JSON.stringify({
           name: input.value,
        });

        const httpHeader = {
            method: 'POST',
            body: payload,
        }

        fetch(BASE_URL, httpHeader)
            .then( () => {
                loadTasks();
            })
            .catch(err => {
                console.error(err);
            })
    }
    function edit(event) {
        const liParent = event.currentTarget.parentNode;
        const [span, _removeBtn, editBtn] = Array.from(liParent.children);
        const editInput = document.createElement('input');
        editInput.value = span.textContent;
        liParent.prepend(editInput);

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener("click", submit);
        liParent.appendChild(submitBtn)
        span.remove();
        editBtn.remove();

    }
    function submit(event) {
        const liParent = event.currentTarget.parentNode
        const id = event.currentTarget.parentNode.id
        const [input] = Array.from(liParent.children)
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({name: input.value})
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadTasks())
            .catch((err) =>{
                console.error(err)
            })
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
