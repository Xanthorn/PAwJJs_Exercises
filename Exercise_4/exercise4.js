class Product {
    constructor(id, name, model, productionYear, price, energyConsumption) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.productionYear = productionYear;
        this.price = price;
        this.energyConsumption = energyConsumption;
        this.energyPrice = 0.50;
    }

    get Price() {
        return this.price;
    }

    get EnergyBill() {
        return this.energyConsumption * this.energyPrice;
    }

    get AgeOfProduct() {
        let year = new Date().getFullYear();
        return year - this.productionYear;
    }

    get AgeOfProductInYears() {
        let age = this.AgeOfProduct;
        if (age === 1) {
            return `${age} year`;
        }
        else {
            return `${age} years`;
        }
    }
}

class ProductsList {
    constructor() {
        this.list = new Array();
    }

    logAll() {
        if (this.list.length === 0) {
            console.log("The products list is empty");
        } else {
            console.log(this.list);
        }
    };

    log(id) {
        if (this.list.length === 0) {
            console.log("The products list is empty");
            return;
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === id) {
                    console.log(this.list[i]);
                    return;
                }
            }
        }

        console.log("There is no product with given id in product list");
    };

    addProduct(product) {
        for (let i = 0; i < this.list.length; i++) {
            if (product.id === this.list[i].id) {
                console.log("Product with given id is already in product list");
                return;
            }
        }

        this.list.push(product);
    };

    modifyProduct(id, product) {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {
                this.list[i] = product;
                console.log("Changes has been made successfully");
                return;
            }
        }

        console.log("There is no product with given id in product list");
    };
}

let product = new Product(1, "PC", "Gaming", 2020, 5500, 0.6);
console.log(product);

console.log(product.Price);
console.log(product.EnergyBill);
console.log(product.AgeOfProduct);
console.log(product.AgeOfProductInYears);

let productsList = new ProductsList();

/////////////////////////////////////////
console.log("\n\n");
/////////////////////////////////////////

productsList.logAll();

productsList.addProduct(product);
productsList.logAll();
productsList.log(1);
productsList.log(2);

modifiedProduct = new Product(1, "PC", "Gaming", 2020, 6000, 0.4);
productsList.modifyProduct(modifiedProduct.id, modifiedProduct);
productsList.log(1);