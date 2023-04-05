function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const input = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price'),
    }
    const buttons = {
        addBtn: document.getElementById('add-product'),
        updateBtn: document.getElementById('update-product'),
        loadBtn: document.getElementById('load-product'),
    }

    const field = {
        productsContainer: document.getElementById('tbody'),
    }

    let currentProducts = [];
    let productToEdit = {};

    buttons.loadBtn.addEventListener('click', loadProducts);
    buttons.addBtn.addEventListener('click', addProduct);
    buttons.updateBtn.addEventListener('click', updateProduct);
    console.log(input);
    console.log(buttons);

    function loadProducts(event) {
        if (event) {
            event.preventDefault();
        }
        field.productsContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((allProducts) => {
                console.log(allProducts);
                currentProducts = Object.values(allProducts);
                for (const { product, count, price, _id} of currentProducts) {
                    const tableRow = createElement('tr', field.productsContainer, null, null, _id);
                    createElement('td', tableRow, product, ['name']);
                    createElement('td', tableRow, count, ['count']);
                    createElement('td', tableRow, price, ['price']);
                    const buttonsTd = createElement('td', tableRow, null, ['btn']);
                    const updateBtn = createElement('button', buttonsTd, 'Update', ['update']);
                    const deleteBtn = createElement('button', buttonsTd, 'Delete', ['delete']);
                    updateBtn.addEventListener('click', transferProductToInput);
                    deleteBtn.addEventListener('click', deleteProduct);
                }
            })

        createElement('td', field.productsContainer)
    }
    function transferProductToInput() {
        const parent = this.parentNode.parentNode;
        const id = parent.id;
        productToEdit = currentProducts.find((p) => p._id === id);
        for (const key in input) {
            input[key].value = productToEdit[key];
        }
        buttons.addBtn.setAttribute('disabled', true);
        buttons.updateBtn.removeAttribute('disabled');
    }
    function addProduct(event) {

        if (event) {
            event.preventDefault();
        }

        const { product, count, price } = input;

        const payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value,
        })

        const httpHeaders = {
            method: 'POST',
            body: payload,
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadProducts();
                clearInput();
            }).catch((err) => {
                console.log(err);
        })

    }
    function updateProduct(event) {
        event.preventDefault();
        const { product, count, price } = input;
        const payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        });
        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }

        fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
            .then(() => {
                loadProducts();
                buttons.addBtn.removeAttribute('disabled');
                buttons.updateBtn.setAttribute('disabled', true);
                clearInput();
            })
            .catch((err) => {
                console.error(err);
            })
    }
    function deleteProduct(event) {
        const parent = event.currentTarget.parentNode.parentNode;
        const id = parent.id;
        console.log(id);
        const httpHeaders = {
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadProducts();
            })
            .catch((err) => {
                console.error(err);
            })

    }
    function clearInput() {
        Object.values(input).forEach((item) => {
            item.value = '';
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