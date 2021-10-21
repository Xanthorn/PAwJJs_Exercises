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