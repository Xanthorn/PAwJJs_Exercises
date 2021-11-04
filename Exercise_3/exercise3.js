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

exercise3_2_firstValue = 0, exercise3_2_secondValue = 0; 

function exercise3_2a(firstValue, secondValue) {
    if(firstValue > secondValue) {
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
    }   else {
        return "Nan";
    }
}

// ----------------------------------------------------------------------------------------------------------------

function exercise3_3(text) {
    textArray = text.split("");
    return textArray.reduce(function(a, b) {
        a[b] = a[b] + 1 || 1
        return a;
    }, {});
}