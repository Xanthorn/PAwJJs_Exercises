let exercise3_1_two_arrays = [ [4, 5, 6], [10, 20, 30] ];
let exercise3_1_three_arrays = [ [1,2,3], [5,6,7], [10,20,30] ]

function exercise3_1(operation, arrays) {
    outputArray = Array.apply(null, Array(arrays[0].length)).map(function () {})  

    for (let i = 0; i < arrays.length - 1; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if(i === 0) {
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
