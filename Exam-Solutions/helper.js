// function createElement(typeOfElement, parent, content, classes, id, attributes, useInnerHtml) {
//     const htmlElement = document.createElement(typeOfElement);
//
//     if (content && useInnerHtml) {
//         htmlElement.innerHTML = content;
//     } else {
//         if (content && typeOfElement !== 'input') {
//             htmlElement.textContent = content;
//         }
//
//         if (content && typeOfElement === 'input') {
//             htmlElement.value = content;
//         }
//     }
//
//     if (classes && classes.length > 0) {
//         htmlElement.classList.add(...classes);
//     }
//
//     if (id) {
//         htmlElement.id = id;
//     }
//
//     // { src: 'link', href: 'http' }
//     if (attributes) {
//         for (const key in attributes) {
//             htmlElement.setAttribute(key, attributes[key])
//         }
//     }
//
//     if (parent) {
//         parent.appendChild(htmlElement);
//     }
//
//     return htmlElement;
// }
// function clearForm() {
//     Object.values(inputs)
//         .forEach((input) => {
//             input.value = '';
//         });
// }
// function transferToForm() {
//     for (let inputsKey in inputs) {
//         inputs[inputsKey].value = dummy[inputsKey];
//     }
// }
// function checkInput() {
//     let allInputsAreValid = Object.values(inputs)
//         .every((input) => input.value !== '');
//
//     if (!allInputsAreValid) {
//         return;
//     }
// }
// function PATCH(event) {
//     event.preventDefault();
//
//
//     const { product, count, price } = inputs;
//
//     const payload = JSON.stringify({
//         product: product.value,
//         count: count.value,
//         price: price.value
//     });
//
//     const httpHeaders = {
//         method: 'PATCH',
//         body: payload
//     }
//
//
//     fetch(`${BASE_URL}${productToEdit.id}`, httpHeaders)
//         .then(() => {
//             loadProducts();
//             buttons.addBtn.removeAttribute('disabled');
//             buttons.updateBtn.setAttribute('disabled', true);
//             clearInput();
//         })
//         .catch((err) => {
//             console.error(err);
//         })
//
// }
// function DELETE(event) {
//     const parent = event.currentTarget.parentNode.parentNode;
//     const id = parent.id;
//     console.log(id);
//     const httpHeaders = {
//         method: 'DELETE'
//     }
//     fetch(`${BASE_URL}${id}`, httpHeaders)
//         .then(() => {
//             loadProducts();
//         })
//         .catch((err) => {
//             console.error(err);
//         })
// }
// function POST(event) {
//     event.preventDefault();
//
//     const { product, count, price } = inputs;
//
//     const payload = JSON.stringify({
//         product: product.value,
//         count: count.value,
//         price: price.value,
//     });
//
//     console.log(payload);
//
//     const httpHeaders = {
//         method: 'POST',
//         body: payload,
//     }
//
//     fetch(BASE_URL, httpHeaders)
//         .then(() => {
//             loadProducts();
//             clearInput();
//         }).catch(err => {
//         console.error(err);
//     })
//
//
// }
// function GET(event) {
//     if (event) {
//         event.preventDefault();
//     }
//
//     field.productContainer.innerHTML = '';
//
//     fetch(BASE_URL)
//         .then((res) => res.json())
//         .then((allProducts) => {
//             currentTasks = Object.values(allProducts);
//             console.log(currentTasks);
//
//             for (const {product, count, price, _id} of currentTasks) {
//                 const tr = createElement('tr', field.productContainer, null, null, _id);
//                 console.log(tr);
//                 createElement('td', tr, product);
//                 createElement('td', tr, count);
//                 createElement('td', tr, price);
//                 const btnTd = createElement('td', tr, null, ['btn']);
//                 const updateBTN = createElement('button', btnTd, 'Update', ['update']);
//                 const deleteBTN = createElement('button', btnTd, 'Delete', ['delete']);
//                 deleteBTN.addEventListener('click', deleteProduct);
//                 updateBTN.addEventListener('click', transferForm);
//             }
//
//             console.log(currentTasks);
//         })
// }
