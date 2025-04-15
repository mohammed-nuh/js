let numbers = [7, 6, 2, 9, 5];

let modifiedNumbers = numbers.map((num) =>  {
    if (num % 2 == 0) {
        return num * 2;
    } else {
        return num + 1;
    }
});

console.log(`Numbers array => ${numbers}`);
console.log(`Modified Numbers array => ${modifiedNumbers}`);
