let num = 10;
let fibonacciArray = [];

for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) {
        fibonacciArray.push(i);
    } else {
        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
    }
}

console.log(`First ${10} fibonacci numbers: ${fibonacciArray}`);        