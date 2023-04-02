window.addEventListener("load", solve);

// Always use array from to transform a collection -> querySelectorAll, children

function solve() {

  const formInput = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null,
  }
  const formSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  };
  const publishBtn = document.getElementById('form-btn');
  const parentOfStory = document.getElementById('preview-list');

  publishBtn.addEventListener('click', publishHandler);
  function publishHandler(event) {
    event.preventDefault();
    let allInputsAreValid = Object.values(formSelectors)
        .every((input) => input.value !== '');

    if (!allInputsAreValid) {
      return;
    }
    const storyInfo = createElement('li', parentOfStory, null, ['story-info']);
    const article = createElement('article', storyInfo);

    createElement('h4', article, `Name: ${formSelectors.firstName.value} ${formSelectors.lastName.value}`);
    createElement('p', article, `Age: ${formSelectors.age.value}`);
    createElement('p', article, `Title: ${formSelectors.title.value}`);
    createElement('p', article, `Genre:  ${formSelectors.genre.value}`);
    createElement('p', article, formSelectors.story.value);

    for (const formSelectorsKey in formSelectors) {
        formInput[formSelectorsKey] = formSelectors[formSelectorsKey].value;
    }


    const saveBtn = createElement('button', storyInfo, 'Save Story', ['save-btn']);
    const editBtn = createElement('button', storyInfo, 'Edit Story', ['edit-btn']);
    const deleteBtn = createElement('button', storyInfo, 'Delete Story', ['delete-btn']);

    editBtn.addEventListener('click', editStoryHandler);
    deleteBtn.addEventListener('click', deleteHandler);
    saveBtn.addEventListener('click', saveHandler);

    clearInput();
    this.setAttribute('disabled', true);
  }
  function editStoryHandler() {
    this.parentNode.remove();
    formSelectors.firstName.value = formInput.firstName;
    formSelectors.lastName.value = formInput.lastName;
    formSelectors.title.value = formInput.title;
    formSelectors.age.value = formInput.age;
    formSelectors.genre.value = formInput.genre;
    formSelectors.story.value = formInput.story;
    publishBtn.removeAttribute('disabled');
  }
  function clearInput() {
    Object.values(formSelectors)
        .forEach((input) => {
          input.value = '';
        });
  }
  function deleteHandler() {
    this.parentNode.remove();
    document.getElementById('form-btn').disabled = false;
  }
  function saveHandler() {
    document.getElementById('main').remove();
    const bodyClass = document.querySelector('.body');
    const div = createElement('div', bodyClass, '', null, 'main');
    createElement('h1', div, 'Your scary story was saved!');
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