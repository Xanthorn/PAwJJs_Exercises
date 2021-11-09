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