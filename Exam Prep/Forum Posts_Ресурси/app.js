window.addEventListener("load", solve);

function solve() {

    const inputs = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content'),
    }
    const publishBtn = document.getElementById('publish-btn');
    const clearBtn = document.getElementById('clear-btn');
    publishBtn.addEventListener('click', publish);
    clearBtn.addEventListener('click', clear);

    const containers = {
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list'),
    }

    const dummy = {
        title: null,
        category: null,
        content: null,
    }
    function clearInput() {
        Object.values(inputs)
            .forEach((input) => {
                input.value = '';
            });
    }
    function publish(event) {

        event.preventDefault();

        let allInputsAreValid = Object.values(inputs)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            return;
        }
        for (let inputsKey in inputs) {
            dummy[inputsKey] = inputs[inputsKey].value;
        }

        const { title, category, content } = inputs;
        const li = createElement('li', containers.review, null, ['rpost']);
        const article = createElement('article', li);
        console.log(li);
        createElement('h4', article, title.value);
        createElement('p', article, `Category: ${category.value}`);
        createElement('p', article, `Content: ${content.value}`);
        const editBtn = createElement('button', li, 'Edit', ['action-btn','edit']);
        const approveBtn = createElement('button', li, 'Approve', ['action-btn','approve']);



        editBtn.addEventListener('click', edit);
        approveBtn.addEventListener('click', approve);

        clearInput();
    }

    function edit() {
        document.querySelector('.rpost').remove();

        for (let inputsKey in inputs) {
            inputs[inputsKey].value = dummy[inputsKey];
        }
    }
    function clear(event) {
        document.querySelector('.rpost').remove();
    }
    function approve(event) {
        event.preventDefault();
        event.currentTarget.parentNode.remove();

        const { title, category, content } = dummy;
        const li = createElement('li', containers.published, null, ['rpost']);
        const article = createElement('article', li);
        createElement('h4', article, title);
        createElement('p', article, `Category: ${category}`);
        createElement('p', article, `Content: ${content}`);
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
