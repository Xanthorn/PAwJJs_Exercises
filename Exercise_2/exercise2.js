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

    radius = window.prompt("Podaj promień");

}