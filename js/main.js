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

// DOM EVENTS 
document.querySelector('#product-form').addEventListener('submit', function(e) {
   const name = document.querySelector('#name').value;
   const price = document.querySelector('#price').value;
   const year = document.querySelector('#year').value;

   const product = new Product(name, price, year);
   const ui = new UI();

   if(name === '' || price === '' || year === ''){
      ui.showMessage('Complete Fields Please', 'info');
      return e.preventDefault();
   }
   ui.addProduct(product);
   ui.showMessage('Product Added Succesfully', 'success');
   ui.resetForm();

   e.preventDefault();
});

document.querySelector('#product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});