let checkEvenOrOdd = n => n % 2 ? "odd" : "even";

let numbers = [2, -3, 0, 5];
numbers.forEach(num => {
    num < 0 ? console.log(`${num} is negative and ${checkEvenOrOdd(num)}`) :
    num == 0 ? console.log(`${num} is zero and even`) :
    console.log(`${num} is positive and ${checkEvenOrOdd(num)}`)
});