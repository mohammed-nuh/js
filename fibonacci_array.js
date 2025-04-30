let getFibonacciSeries = n => {
    let fibSeries = [];
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            fibSeries.push(i); 
        } else {
            fibSeries.push(fibSeries[i-2] + fibSeries[i-1]);
        }
    }
    return fibSeries;
}

let n = 5;
let fibonacciSeries = getFibonacciSeries(n);
console.log(`Fibonacci series till ${n} is ${fibonacciSeries}`);