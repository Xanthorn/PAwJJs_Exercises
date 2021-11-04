import Product from './Product';

function ProductsList() {
    this.list = new Array();

    this.logAll() = function () {
        if (this.list.length === 0) {
            console.log("The products list is empty");
        } else {
            console.log(this.list);
        }
    }

    this.log(id) = function(id) {
        if (this.list.length === 0) {
            console.log("The products list is empty");
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === id) {
                    console.log(this.list[i]);
                    break;
                }
            }
        }
    }

    this.addProduct(product) = function(product) {
        for (let i = 0; i < this.list.length; i++) {
            if (product.id === this.list[i].id) {
                console.log("Product with given id is already in product list");
                return;
            }
        }

        this.list.push(product);
    }

    this.modifyProduct(product) = function(product) {
        for (let i = 0; i < this.list.length; i++) {
            if (product.id === this.list[i].id) {
                this.list[i] = product;
                console.log("Changes has been made successfully");
                return;
            }
        }
    }

    console.log("There is no product with given id in product list");
}