window.addEventListener('load', solve);

function solve() {

    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        dayCount: document.getElementById('days-count'),
    }
    const inputState = {
        firstName: null,
        lastName: null,
        peopleCount: null,
        fromDate: null,
        dayCount: null,
    }
    const buttons = {
        nextStep: document.getElementById('next-btn'),
    }
    buttons.nextStep.addEventListener('click', nextHandler)
    function nextHandler(event) {
        event.preventDefault();
        let allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            console.log('NOT VALID');
            return;
        }

        const li = createElement('li', document.querySelector('.ticket-info-list'),
            null, ['ticket']);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${inputDOMSelectors.firstName.value} ${inputDOMSelectors.lastName.value}`);
        createElement('p', article, `From date: ${inputDOMSelectors.fromDate.value}`);
        createElement('p', article,`For ${inputDOMSelectors.dayCount.value} days`);
        createElement('p', article, `For ${inputDOMSelectors.peopleCount.value} people`);
        const editBtn = createElement('button', li, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', li, 'Continue', ['continue-btn']);

        fillInput();
        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueTicket);

        clear();
        this.setAttribute('disabled', true);
    }
    function continueTicket(event) {
        event.preventDefault();
        this.parentNode.remove();

        const li = createElement('li', document.querySelector('.confirm-ticket'),
            null, ['ticket']);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${inputState.firstName} ${inputState.lastName}`);
        createElement('p', article, `From date: ${inputState.fromDate}`);
        createElement('p', article,`For ${inputState.dayCount} days`);
        createElement('p', article, `For ${inputState.peopleCount} people`);
        const confirmBtn = createElement('button', li, 'Confirm', ['confirm-btn']);
        const cancelBtn = createElement('button', li, 'Cancel', ['cancel-btn']);

        confirmBtn.addEventListener('click', confirm);
        cancelBtn.addEventListener('click', cancel);

    }
    function confirm() {
        document.getElementById('main').remove();
        const bodyClass = document.getElementById('body');
        createElement('h1', bodyClass, 'Thank you, have a nice day!', null, 'thank-you');
        const backBtn = createElement('button', bodyClass, 'Back', null, 'back-btn');

        backBtn.addEventListener('click', refreshPage);

    }
    function refreshPage(){
        window.location.reload();
    }
    function cancel() {
        this.parentNode.remove();
        buttons.nextStep.removeAttribute('disabled');
    }
    function fillInput() {
        for (const key in inputDOMSelectors) {
            inputState[key] = inputDOMSelectors[key].value;
        }
    }
    function edit(event) {
        event.preventDefault();
        this.parentNode.remove();

        inputDOMSelectors.firstName.value = inputState.firstName;
        inputDOMSelectors.lastName.value = inputState.lastName;
        inputDOMSelectors.peopleCount.value = inputState.peopleCount;
        inputDOMSelectors.fromDate.value = inputState.fromDate;
        inputDOMSelectors.dayCount.value = inputState.dayCount;

        buttons.nextStep.removeAttribute('disabled');
    }
    function clear() {
        Object.values(inputDOMSelectors).forEach((input) => {
            input.value = '';
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


    
    
