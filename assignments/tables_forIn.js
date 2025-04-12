let numbers = [1,2,3,4,5];

for (let i in numbers) {
    console.log(`Table of ${numbers[i]}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${numbers[i]} x ${j} = ${numbers[i] * j}`);  
    }
    console.log();
}