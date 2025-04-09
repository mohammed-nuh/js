function calcAndPrintFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;  
    }
    printFactorial(num, factorial);
}

function printFactorial(num, factorial){
    console.log(`Factorial of ${num} is ${factorial}`);
}

calcAndPrintFactorial(4);