let rows = 6;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}