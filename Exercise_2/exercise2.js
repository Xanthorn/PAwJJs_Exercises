function exercise2_1() {
    let output = '';
    for(let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            output += 'Fizz';
        } 
        if (i % 3 === 0) {
            output += 'Buzz';
        }
        if (i % 2 !== 0 && i % 3 !== 0) {
            output += i;
        }
        output += ' ';
    }
    
    console.log(output);
}

// ----------------------------------------------------------------------------------------------------------------

function exercise2_2() {
    let radius = 0, circumference = 0.0, surfaceArea = 0.0;

    radius = window.prompt("Enter the radius");

    circumference = Math.round(2 * Math.PI * radius * 100) / 100;    // round() round the number to integer so if you want to get 2 places after comma then 
    surfaceArea = Math.round(Math.PI * radius * radius * 100) / 100; // you need to multiply by 100 and then divide by 100

    console.log(`The circumference is equal to: ${circumference} and surface area is equal to: ${surfaceArea}.`);
}

// ----------------------------------------------------------------------------------------------------------------

let exercise2_3_array = [];

function exercise2_3_printAll() {
    console.log(exercise2_3_array);
}

function exercise2_3_printEmptyArray() {
    console.log("First you need to fill in the array.");
}

function exercise2_3a() {
    exercise2_3_sum = 0;
    exercise2_3_array = [];
    min = Math.ceil(1);
    max = Math.floor(10);
    while (exercise2_3_sum < 200) {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        exercise2_3_sum += number;
        exercise2_3_array.push(number);
    }
    
    exercise2_3_printAll();
}

function exercise2_3b() {
    if(exercise2_3_array.length === 0) {
        exercise2_3_printEmptyArray();
        return;
    }

    smallestValue = Number.MAX_SAFE_INTEGER;
    smallestValueIndex = 0;

    for (let i = 0; i < exercise2_3_array.length; i++) {
        if (exercise2_3_array[i] < smallestValue) {
            smallestValue = exercise2_3_array[i];
            smallestValueIndex = i;
            if (smallestValue === 1) {
                break;
            }
        }
    }

    exercise2_3_array.splice(smallestValueIndex, 1);

    console.log(`The smallest value was: ${smallestValue}, it appeared for the first time under the ${smallestValueIndex} index.`);

    exercise2_3_printAll();
}

function exercise2_3c() {
    if(exercise2_3_array.length === 0) {
        exercise2_3_printEmptyArray();
        return;
    }

    biggestValue = Number.MIN_SAFE_INTEGER;
    biggestValueIndex = 0;

    for (let i = 0; i < exercise2_3_array.length; i++) {
        if (exercise2_3_array[i] > biggestValue) {
            biggestValue = exercise2_3_array[i];
            biggestValueIndex = i;
            if (biggestValue === 9) {
                break;
            }
        }
    }

    exercise2_3_array.splice(biggestValueIndex, 1);

    console.log(`The biggest value was: ${biggestValue}, it appeared for the first time under the ${biggestValueIndex} index.`);

    exercise2_3_printAll();
}

function exercise2_3d() {
    if(exercise2_3_array.length === 0) {
        exercise2_3_printEmptyArray();
        return;
    }

    numberOfAppearances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(let i = 0; i < exercise2_3_array.length; i++) {
        numberOfAppearances[exercise2_3_array[i] - 1]++;
    }

    for(let i = 0; i < numberOfAppearances.length; i++) {
        console.log(`The value ${i + 1} has appeared ${numberOfAppearances[i]} times.`);
    }
}

function exercise2_3e() {
    if(exercise2_3_array.length === 0) {
        exercise2_3_printEmptyArray();
        return;
    }

    cutValues = exercise2_3_array.splice(0, 10);

    exercise2_3_array = exercise2_3_array.concat(cutValues);

    exercise2_3_printAll();
}

// ----------------------------------------------------------------------------------------------------------------

function exercise2_4() {
    names = ["Tadeusz", "Kazimierz", "Weronika", "Ryszard", "Mariusz"];

    console.log(`Names before the changes: ${names}`);

    for(let i = 0; i < names.length; i++) {
        names[i] = names[i].replace(/[aA]/, 4);
        names[i] = names[i].replace(/[eE]/, 3);

        if(names[i].length > 6) {
            newName = names[i].substring(0, 3); // 
            newName += "...";
            newName += names[i].substring(names[i].length - 3, names[i].length);
            names[i] = newName;
        }
    }

    console.log(`Names after the changes: ${names}`);
}

// ----------------------------------------------------------------------------------------------------------------

class ProductPrice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

class ProductQuantity {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
};

function exercise2_5() {
    productsString = "Shampoo, Eggs, Soap, Apples, Bread, Rolls, Ham, Carrots, Rice, Pasta, Toothpaste, Tomatoes";

    products = productsString.split(', ');

    // Price list
    priceList = [];

    for (let i = 0; i < products.length; i++) {
        newProductPrice = new ProductPrice(products[i], Math.floor((Math.random() * (1000 - 100 + 1)) + 100) / 100);
        priceList.push(newProductPrice);
    }

    console.log(`Price List:`);
    for (let i = 0; i < priceList.length; i++) {
        console.log(`Product: ${priceList[i].name}\nPrice: ${priceList[i].price}\n\n`);
    }

    // Shopping list
    shoppingList = [];
    i = priceList.length / 2;
    j = 0;

    while(i--) {
        j = Math.floor(Math.random() * priceList.length);
        shoppingList.push(new ProductQuantity(priceList[j].name, Math.floor(Math.random() * (10 - 1 + 1)) + 1));
        priceList.splice(j, 1);
    }

    console.log(`\n\nShopping List:`);
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`Product: ${shoppingList[i].name}\nQuantity: ${shoppingList[i].quantity}\n\n`);
    }
}