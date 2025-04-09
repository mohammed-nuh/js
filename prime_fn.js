function isPrimeNo(num) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0){
            isPrime = false;
            break;
        }
        return isPrime;
    }
}

let n = 7;
let isNoPrime = isPrimeNo(n);

if (isNoPrime == true) {
    console.log(`${n} is a prime no.`);
} else {
    console.log(`${n} is a composite no.`);
}

