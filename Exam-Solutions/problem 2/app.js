window.addEventListener('load', solve);

function solve() {
    const input = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        dropDown: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
        id: document.getElementById('task-id'),
    }
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');

    const container = {
        taskSection: document.getElementById('tasks-section'),
        sprintPoints: document.getElementById('total-sprint-points'),
    }

    createTaskBtn.addEventListener('click', addTask);
    deleteTaskBtn.addEventListener('click', deleteTaskSubmit);

    const dummy = {
        title: null,
        description: null,
        dropDown: null,
        points: null,
        assignee: null,
        id: null,
    }
    const allTasks = [];

    let idCount = 1;
    let points = 0;

    function addTask(event) {
        event.preventDefault();
        input.id.value = `task-${idCount}`;
        let allInputsAreValid = Object.values(input)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            console.log('NOT VALID');
            return;
        }

        points += Number(input.points.value);

        const article = createElement('article', container.taskSection, null, ['task-card'], `task-${idCount}`);
        if (input.dropDown.value === 'Feature') {
            const feature = createElement('div', article, 'Feature', ['task-card-label', 'feature']);
            feature.innerHTML = input.dropDown.value + ' &#8865'
        } else if (input.dropDown.value === 'Low Priority Bug') {
            const lowBug = createElement('div', article, 'Low Priority Bug', ['task-card-label', 'low-priority']);
            lowBug.innerHTML = input.dropDown.value + ' &#9737';
        } else {
            const highBug = createElement('div', article, 'High Priority Bug &#9888', ['task-card-label', 'high-priority']);
            highBug.innerHTML = input.dropDown.value + ' &#9888';
        }
        createElement('h3', article, input.title.value, ['task-card-title']);
        createElement('p', article, input.description.value, ['task-card-description']);
        createElement('div', article, `Estimated at ${input.points.value} pts`, ['task-card-points']);
        createElement('div', article, `Assigned to: ${input.assignee.value}`, ['task-card-assignee']);
        const parentOfButton = createElement('div', article,null, ['task-card-actions']);
        const deleteButton = createElement('button', parentOfButton, 'Delete',null, idCount--);
        deleteButton.addEventListener('click', deleteTask);


        container.sprintPoints.innerHTML = `Total Points ${points}pts`;
        idCount++;
        for (let inputsKey in input) {
             dummy[inputsKey] = input[inputsKey].value;
        }
        allTasks.push(dummy);

        clearForm();
        console.log(allTasks);
    }
    function deleteTask(event) {
        const parent = event.currentTarget.parentNode.parentNode;
        const taskId = parent.id;

        const taskToEdit = allTasks.find(function(task) {
            return task.id === taskId;
        });

        document.getElementById('title').value = taskToEdit.title;
        document.getElementById('description').value = taskToEdit.description;
        document.getElementById('label').value = taskToEdit.dropDown;
        document.getElementById('points').value = taskToEdit.points;
        document.getElementById('assignee').value = taskToEdit.assignee;
        document.getElementById('task-id').value = taskToEdit.id;

        createTaskBtn.setAttribute('disabled', true);
        deleteTaskBtn.removeAttribute('disabled');
        for (let inputsKey in input) {
            input[inputsKey].disabled = true;
        }
    }
    function deleteTaskSubmit(event) {
        event.preventDefault();

        const elementToDelete = document.getElementById('task-id');
        const taskId = elementToDelete.value;

        const task = document.getElementById(`${taskId}`);
        console.log(task);
        task.remove();


        points -= Number(document.getElementById('points').value);
        container.sprintPoints.innerHTML = `Total Points ${points}pts`

        deleteTaskBtn.setAttribute('disabled', true);
        createTaskBtn.removeAttribute('disabled');
        for (let inputsKey in input) {
            input[inputsKey].disabled = false;
            input[inputsKey].value = '';
        }

    }
    function clearForm() {
    Object.values(input)
        .forEach((input) => {
            input.value = '';
        });
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


    console.log(container);
}