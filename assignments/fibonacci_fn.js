function printFibonacciSeries(nth){
    let fibonacciSeries = [];
    for (let i = 0; i < nth; i++) {
        if (i == 0 || i == 1) {
            fibonacciSeries.push(i); 
        } else {
            fibonacciSeries.push(fibonacciSeries[i-2] + fibonacciSeries[i-1]); 
        } 
    }
    console.log(`Fibonacci Series till ${nth} is ${fibonacciSeries}`); 
}

printFibonacciSeries(7);