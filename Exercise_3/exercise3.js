let exercise3_1_two_arrays = [[4, 5, 6], [10, 20, 30]];
let exercise3_1_three_arrays = [[1, 2, 3], [5, 6, 7], [10, 20, 30]]

function exercise3_1(operation, arrays) {
    outputArray = Array.apply(null, Array(arrays[0].length)).map(function () { })

    for (let i = 0; i < arrays.length - 1; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if (i === 0) {
                outputArray[j] = operation(arrays[i][j], arrays[i + 1][j]);
            }
            else {
                outputArray[j] = operation(outputArray[j], arrays[i + 1][j]);
            }
        }
    }

    console.log(outputArray);
}

function sum(a, b) {
    return a + b;
}

function createPoint(a, b) {
    return `(x: ${a}, y: ${b})`;
}

// ----------------------------------------------------------------------------------------------------------------

exercise3_2_firstValue = 0, exercise3_2_secondValue = 0;

function exercise3_2a(firstValue, secondValue) {
    if (firstValue > secondValue) {
        exercise3_2_firstValue = secondValue;
        exercise3_2_secondValue = firstValue;
    } else {
        exercise3_2_firstValue = firstValue;
        exercise3_2_secondValue = secondValue;
    }

    return exercise3_2b();
}

function exercise3_2b() {
    if (exercise3_2_secondValue >= exercise3_2_firstValue) {
        return exercise3_2_secondValue--;
    } else {
        return "Nan";
    }
}

// ----------------------------------------------------------------------------------------------------------------

function exercise3_3(text) {
    textArray = text.split("");
    return textArray.reduce(function (a, b) {
        a[b] = a[b] + 1 || 1
        return a;
    }, {});
}

// ----------------------------------------------------------------------------------------------------------------

let exercise3_4_array = [];

function exercise3_4(array) {
    exercise3_4_array = [];
    array.forEach(function (x, index) {
        if ((index + 1) % 2 == 0) {
            exercise3_4_array.push(array[index]);
        }
    });
}

// ----------------------------------------------------------------------------------------------------------------

let exercise3_5_array = Array.apply(null, Array(15)).map(function (x, i) { return i; })

let exercise3_5_evenNumbers = 0;
let exercise3_5_sum = 0;


function exercise3_5_fill_array() {
    exercise3_5_array.forEach(function (x, index) {
        exercise3_5_fill_index(index)
    });
    exercise3_5_calculate(exercise3_5_array);
}

function exercise3_5_fill_index(index) {
    min = Math.ceil(1);
    max = Math.floor(10);
    exercise3_5_array[index] = Math.floor(Math.random() * (max - min + 1)) + min;
}

function exercise3_5_calculate(array) {
    exercise3_5_evenNumbers = 0;
    exercise3_5_sum = 0;
    array.reduce(function (a, b) {
        if (a % 2 == 0) {
            exercise3_5_evenNumbers++;
        }
        if (b % 2 == 0) {
            exercise3_5_evenNumbers++;
        }
    })
    array.map((num) => exercise3_5_sum += num);  
    console.log(`Occurences of even numbers in array: ${exercise3_5_evenNumbers}`);
    console.log(`Sum of array: ${exercise3_5_sum}`);
}