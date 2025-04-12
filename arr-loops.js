let sales = [10000, 50000, 7000];

// for-loop
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];  
}
console.log(`Total Sales using for-loop => ${totalSales}\n`);

// for-in
totalSales = 0;
for (let i in sales) {
    console.log(`Day ${parseInt(i) + 1} sale -> ${sales[i]}`);
    totalSales += sales[i]; 
}
console.log(`Total Sales using for-in => ${totalSales}\n`);

// for-of
totalSales = 0;
for (let sale of sales) {
    totalSales += sale;  
}
console.log(`Total Sales using for-of => ${totalSales}\n`);

// for-each
totalSales = 0;
sales.forEach((sale, i) => {
    console.log(`Day ${parseInt(i) + 1} sale -> ${sales[i]}`);
    totalSales += sale;  
});
console.log(`Total Sales using for-each => ${totalSales}\n`);