let num = 13;
let isPrime = true;

for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
        isPrime = false;
        break;        
    }
}

if (isPrime) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is a composite number.`);
}