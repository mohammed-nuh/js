let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Table of ${numbers[i]}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${numbers[i]} * ${j} = ${numbers[i] * j}`);
    }
    console.log("");
}
