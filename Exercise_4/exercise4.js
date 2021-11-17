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

class ProductQuantity {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

/////////////////////////////////////////

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

/////////////////////////////////////////

class Shop extends ProductsList {
    constructor() {
        super();
    }

    addProductAutoId(name, model, productionYear, price, energyConsumption) {
        let i = 0;
        if (this.list.length > 0) {
            while (true) {
                if (i !== this.list[i].id) {
                    break;
                }
                i++;
            }
        }

        let newProduct = new Product(i, name, model, productionYear, price, energyConsumption);

        this.list.push(newProduct);
    }

    addProduct(id, name, model, productionYear, price, energyConsumption) {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {
                console.log("Product with given id is already in shop list");
                return;
            }
        }

        let newProduct = new Product(id, name, model, productionYear, price, energyConsumption);

        this.list.push(newProduct);
    }
}

/////////////////////////////////////////

class Warehouse extends ProductsList {
    constructor() {
        super();
    }

    log(id) {
        if (this.list.length === 0) {
            console.log("The warehouse is empty");
            return;
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].product.id === id) {
                    console.log(this.list[i]);
                    return;
                }
            }
        }

        console.log("There is no product with given id in warehouse list");
    };

    addProduct(product, quantity) {
        for (let i = 0; i < this.list.length; i++) {
            if (product.id === this.list[i].product.id) {
                console.log("Product with given id is already in warehouse list");
                return;
            }
        }

        let productQuantity = new ProductQuantity(product, quantity);

        this.list.push(productQuantity);
    };

    modifyProduct(id, product, quantity) {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].product.id) {
                this.list[i].product = product;
                this.list[i].quantity = quantity;
                console.log("Changes has been made successfully");
                return;
            }
        }

        console.log("There is no product with given id in warehouse list");
    };

    getProduct(id, quantity) {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].product.id) {
                if (this.list[i].quantity >= quantity) {
                    let gottenProduct = new ProductQuantity(this.list[i].product, this.list[i].quantity);
                    this.list[i].quantity -= quantity;

                    return gottenProduct;
                } else {
                    console.log("There is no product quantity needed");
                    return;
                }
            }
        }

        console.log("There is no product with given id in warehouse list");
    }
}

/////////////////////////////////////////

class Order extends Warehouse {
    constructor() {
        super();
        this.orderList = Array();
    }

    addToOrder(id, quantity) {
        let orderPosition = this.getProduct(id, quantity);

        if(orderPosition !== null) {
            this.orderList.push(orderPosition);
        }
    }

    finalizeOrder() {
        for (let i = 0; i < this.orderList.length; i++) {
            console.log(this.orderList[i].product);
            console.log(this.orderList[i].quantity);
        }
    }
}

/////////////////////////////////////////

let product = new Product(1, "PC", "Gaming", 2020, 5500, 0.6);
console.log(product);

console.log(product.Price);
console.log(product.EnergyBill);
console.log(product.AgeOfProduct);
console.log(product.AgeOfProductInYears);

/////////////////////////////////////////
console.log("\n\n");
/////////////////////////////////////////

let productsList = new ProductsList();

productsList.logAll();

productsList.addProduct(product);
productsList.logAll();
productsList.log(1);
productsList.log(2);

modifiedProduct = new Product(1, "PC", "Gaming", 2020, 6000, 0.4);
productsList.modifyProduct(modifiedProduct.id, modifiedProduct);
productsList.log(1);

/////////////////////////////////////////
console.log("\n\n");
/////////////////////////////////////////

let shop = new Shop();
shop.logAll();

shop.addProductAutoId("Komputer", "Dla graczy", 2021, 4000, 0.5);
shop.logAll();

shop.addProduct(0, "Smartfon", "Samsung S20", 2020, 2500, 0.1);
shop.logAll();

shop.addProduct(1, "Smartfon", "Samsung S20", 2020, 2500, 0.1);
shop.logAll();

/////////////////////////////////////////
console.log("\n\n");
/////////////////////////////////////////

let warehouse = new Warehouse();
warehouse.logAll();

warehouse.addProduct(product, 5);
warehouse.logAll();
warehouse.log(1);

warehouse.getProduct(1, 2);
warehouse.logAll();
warehouse.log(1);

warehouse.getProduct(1, 4);
warehouse.logAll();
warehouse.log(1);

warehouse.getProduct(0, 2);
warehouse.logAll();
warehouse.log(1);

/////////////////////////////////////////
console.log("\n\n");
/////////////////////////////////////////

let order = new Order();
order.list = warehouse.list;

order.addToOrder(1, 3);
order.finalizeOrder();