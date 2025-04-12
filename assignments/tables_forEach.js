let numbers = [1,2,3,4,5];

numbers.forEach((number) => {
    console.log(`Table of ${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    console.log();
});