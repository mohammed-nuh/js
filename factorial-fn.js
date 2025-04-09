function calcFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;  
    }
    return factorial;
}

let num = 4;
console.log(`Factorial of ${num} is ${calcFactorial(num)}`);