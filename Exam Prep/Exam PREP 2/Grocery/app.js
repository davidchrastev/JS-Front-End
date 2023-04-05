function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    const inputs = {
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
        productContainer: document.getElementById('tbody'),
    }
    let currentTasks = [];

    console.log(buttons);

    buttons.loadBtn.addEventListener('click', loadProducts);
    buttons.addBtn.addEventListener('click', addProduct);
    buttons.updateBtn.addEventListener('click', update);
    function loadProducts(event) {
        if (event) {
            event.preventDefault();
        }

        field.productContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((allProducts) => {
                currentTasks = Object.values(allProducts);
                console.log(currentTasks);

                for (const {product, count, price, _id} of currentTasks) {
                    const tr = createElement('tr', field.productContainer, null, null, _id);
                    console.log(tr);
                    createElement('td', tr, product);
                    createElement('td', tr, count);
                    createElement('td', tr, price);
                    const btnTd = createElement('td', tr, null, ['btn']);
                    const updateBTN = createElement('button', btnTd, 'Update', ['update']);
                    const deleteBTN = createElement('button', btnTd, 'Delete', ['delete']);
                    deleteBTN.addEventListener('click', deleteProduct);
                    updateBTN.addEventListener('click', transferForm);
                }

                console.log(currentTasks);
            })
    }
    function addProduct(event) {
        event.preventDefault();

        const { product, count, price } = inputs;

        const payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value,
        });

        console.log(payload);

        const httpHeaders = {
            method: 'POST',
            body: payload,
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadProducts();
                clearInput();
            }).catch(err => {
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

    let productToEdit = {};
    function transferForm(event) {
        event.preventDefault();
        const parent = event.currentTarget.parentNode.parentNode;
        const id = parent.id;
        const parentN = document.getElementById(id);

        const name = parentN.children[0].innerHTML;
        const count = parentN.children[1].innerHTML;
        const price = parentN.children[2].innerHTML;

        inputs.product.value = name;
        inputs.count.value = count;
        inputs.price.value = price;

        productToEdit.name = name;
        productToEdit.count = count;
        productToEdit.price = price;
        productToEdit.id = id;

        console.log(productToEdit);

        buttons.addBtn.setAttribute('disabled', true);
        buttons.updateBtn.removeAttribute('disabled');
    }
    function update(event) {
        event.preventDefault();


        const { product, count, price } = inputs;

        const payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        });

        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }


        fetch(`${BASE_URL}${productToEdit.id}`, httpHeaders)
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
    function clearInput() {
        Object.values(inputs).forEach((item) => {
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