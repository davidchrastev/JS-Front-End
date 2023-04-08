function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const inputs = {
        loadBoardBtn: document.getElementById('load-board-btn'),
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        createTaskBtn: document.getElementById('create-task-btn'),
    }
    const container = {
        toDo: document.getElementById('todo-section'),
        inProgress: document.getElementById('in-progress-section'),
        codeReview: document.getElementById('code-review-section'),
        done: document.getElementById('done-section'),
    }
    inputs.loadBoardBtn.addEventListener('click', load);
    let currentTasks = [];
    function load(event) {
        if (event) {
            event.preventDefault();
        }

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((allProducts) => {
                currentTasks = Object.values(allProducts);
                console.log(currentTasks);

                for (const { description, status, title, _id } of currentTasks) {

                    switch (status) {
                        case 'ToDo':
                            const li = createElement('li', container.toDo.children[1],'', ['task'], _id);
                            createElement('h3', li, title);
                            createElement('p', li, description);
                            const moveToProgress = createElement('button', li, 'Move to In Progress');
                            moveToProgress.addEventListener('click', toInProgress);
                            break;
                        case 'In Progress':
                            const liProgress = createElement('li', container.inProgress.children[1],'', ['task'], _id);
                            createElement('h3', liProgress, title);
                            createElement('p', liProgress, description);
                            const moveToCodeReview = createElement('button', liProgress, 'Move to Code Review');
                            moveToCodeReview.addEventListener('click', toCodeReview);

                            break;
                        case 'Code Review':
                            const liReview = createElement('li', container.codeReview.children[1],'', ['task'], _id);
                            createElement('h3', liReview, title);
                            createElement('p', liReview, description);
                            const moveToDone = createElement('button', liReview, 'Move to Done');
                            moveToDone.addEventListener('click', toDone);
                            break
                        case 'Done':
                            const liDone = createElement('li', container.done.children[1],'', ['task'], _id);
                            createElement('h3', liDone, title);
                            createElement('p', liDone, description);
                            const close = createElement('button', liDone, 'Close');
                            close.addEventListener('click', deleteTask);

                            break;
                    }
                }

            })
    }
    function deleteTask() {
        const id = this.parentNode.id;

    const httpHeaders = {
        method: 'DELETE'
    }
    fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => {
            load();
        })
        .catch((err) => {
            console.error(err);
        })
    }
    function toInProgress() {
        const id = this.parentNode.id;
        console.log(id);

        const payload = JSON.stringify({
            status: 'In Progress',
        });

        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                load();
            })
            .catch((err) => {
                console.error(err);
            })

    }
    function toCodeReview() {
        const id = this.parentNode.id;
        console.log(id);

        const payload = JSON.stringify({
            status: 'Code Review',
        });

        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                load();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function toDone() {
        const id = this.parentNode.id;
        console.log(id);

        const payload = JSON.stringify({
            status: 'Done',
        });

        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                load();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    inputs.createTaskBtn.addEventListener('click', addTask);
    function addTask(event) {
        event.preventDefault();
        const { title, description } = inputs;
        const payload = JSON.stringify({
            title: title.value,
            description: description.value,
            status: 'ToDo',
        });
            const httpHeaders = {
                method: 'POST',
                body: payload,
            }
            console.log(payload);

            fetch(BASE_URL, httpHeaders)
                .then(() => {
                    clearForm();
                    load();
                }).catch(err => {
                console.error(err);
            })

    }
    function clearForm() {
    Object.values(inputs)
        inputs.title.value = '';
        inputs.description.value = '';
    }
    function createElement(typeOfElement, parent, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(typeOfElement);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && typeOfElement !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && typeOfElement === 'input') {
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

        if (parent) {
            parent.appendChild(htmlElement);
        }

        return htmlElement;
    }
}

attachEvents();