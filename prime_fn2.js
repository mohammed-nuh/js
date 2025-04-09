function isPrimeNo(num) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0){
            isPrime = false;
            break
        }
    }

    if (isPrime == true) {
        console.log(`${num} is a prime no.`);
    } else {
        console.log(`${num} is a composite no.`);
    }
}

isPrimeNo(12);



