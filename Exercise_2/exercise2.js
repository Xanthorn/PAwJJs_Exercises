let exercise2_3_array = [];
let exercise2_3_sum = 0;

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

function exercise2_2() {
    let radius = 0, circumference = 0.0, surfaceArea = 0.0;

    radius = window.prompt("Enter the radius");

    circumference = Math.round(2 * Math.PI * radius * 100) / 100;    // round() round the number to integer so if you want to get 2 places after comma then 
    surfaceArea = Math.round(Math.PI * radius * radius * 100) / 100; // you need to multiply by 100 and then divide by 100

    console.log(`The circumference is equal to: ${circumference} and surface area is equal to: ${surfaceArea}`);
}

function exercise2_3_printAll() {
    console.log(exercise2_3_array);
}

function exercise2_3a() {
    exercise2_3_sum = 0;
    exercise2_3_array = [];
    min = Math.ceil(1);
    max = Math.floor(10);
    while (exercise2_3_sum < 200) {
        number = Math.floor(Math.random() * (max - min)) + min;
        exercise2_3_sum += number;
        exercise2_3_array.push(number);
    }
    
    exercise2_3_printAll();
}