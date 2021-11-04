function Product(id, name, model, productionYear, price, energyConsumption) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.productionYear = productionYear;
    this.price = price;
    this.energyConsumption = energyConsumption;
    this.energyPrice = 0.50;

    this.price() = function() {
        return this.price;
    }

    this.energyPrice() = function() {
        return this.energyPrice * this.energyConsumption;
    }

    this.ageOfProduct() = function() {
        return new Date().getFullYear() - this.productionYear;
    }

    this.ageOfProductInYears() = function() {
        let age = this.ageOfProduct();
        return `${age} years`;
    }
}