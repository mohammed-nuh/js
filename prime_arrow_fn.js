let isPrimeNo = n => {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime == true) {
        console.log(`${n} is a prime no.`);
    } else {
        console.log(`${n} is a composite no.`);
    }
}

isPrimeNo(17);



