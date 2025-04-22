let numbers = [7, 6, 2, 9, 5];

let modifiedNumbers = numbers.map((num) =>  {
    if (num % 2 == 0) {
        return num.toString().concat("_even");
    } else {
        return num.toString().concat("_odd");
    }
});

console.log(`Numbers array => ${numbers}`);
console.log(`Modified Numbers array => ${modifiedNumbers}`);
