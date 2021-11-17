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
        this.products = new [];
    }

    PrintProducts() {
        if(this.products.length() === 0) {
            console.log("List of products is empty");
        }
        else {
            for(let i = 0; i < this.products.length(); i++) {
                console.log(`${this.products[i]}\n`);
            }
        }
    }

    PrintProduct(id) {
        
    }
}

let product = new Product(1, "PC", "Gaming", 2020, 5500, 0.6);
console.log(product);

console.log(product.Price);
console.log(product.EnergyBill);
console.log(product.AgeOfProduct);
console.log(product.AgeOfProductInYears);