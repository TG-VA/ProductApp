# Product App
[![https://i.imgur.com/LTbakag.gif](https://i.imgur.com/LTbakag.gif "https://i.imgur.com/LTbakag.gif")](https://i.imgur.com/LTbakag.gif "https://i.imgur.com/LTbakag.gif")

### 📄 Content 
In this project we developed an app to store products (product name, product price and product year) and delete them. This project is mainly oriented to implement [Object Oriented Programming (OOP)](https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP "Object Oriented Programming (OOP)").

It consists of an app that allows you to add and store products (product name, product price and product year) as well as delete them in case they are already required by the user.

We can see how we use classes for the product attributes:

```javascript
class Product {
    constructor(
        name,
        price,
        year,
    ){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

```

Just as we make use of classes for the application methods:

```javascript
class UI {
    addProduct(product) {
        const productList = document.querySelector('#product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product</strong>: ${product.name}
            <strong>Price</strong>: ${product.price}
            <strong>Year</strong>: ${product.year}
            <a href="/" class="btn btn-danger" name="delete">Delete</a>
            </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.querySelector('#product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'danger');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        container.insertBefore(div, app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 1000);
    }
}
```
Then, in an easy and simple way, you can call these methods:
```javascript
document.querySelector('#product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});
```

<h3 align="left">Languages and Tools</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Author
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.

# App de Productos
[![https://i.imgur.com/LTbakag.gif](https://i.imgur.com/LTbakag.gif "https://i.imgur.com/LTbakag.gif")](https://i.imgur.com/LTbakag.gif "https://i.imgur.com/LTbakag.gif")

### 📄 Introducción
En este proyecto desarrollamos una app para poder almacenar productos (Nombre del producto, Precio del producto y año del producto) y eliminarlos. Esta proyecto está principalmente orientado a poner en práctica la [Programación Orientada a Objeto (POO)](https://universidadeuropea.com/blog/programacion-orientada-objetos/#:~:text=La%20programaci%C3%B3n%20orientada%20a%20objetos%20es%20un%20modelo%20de%20programaci%C3%B3n,l%C3%B3gica%20necesaria%20para%20esa%20manipulaci%C3%B3n. "Programación Orientada a Objeto (POO)").

Consiste en una app que te permite agregar y almacenar productos (Nombre del producto, Precio del producto y año del producto) al igual que eliminarlos en el caso de que ya se sean requeridos por el usuario.

Podemos observar como utilizamos clases para  los atributos de los productos:
```javascript
class Product {
    constructor(
        name,
        price,
        year,
    ){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

```

Al igual que hacemos el uso de clases para los métodos de la aplicación:

```javascript
class UI {
    addProduct(product) {
        const productList = document.querySelector('#product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product</strong>: ${product.name}
            <strong>Price</strong>: ${product.price}
            <strong>Year</strong>: ${product.year}
            <a href="/" class="btn btn-danger" name="delete">Delete</a>
            </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.querySelector('#product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'danger');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        container.insertBefore(div, app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 1000);
    }
}
```
Para después, de forma fácil y sencilla, poder llamar a estos métodos:

```javascript
document.querySelector('#product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});
```


<h3 align="left">Tecnologías y herramientas</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>


### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.