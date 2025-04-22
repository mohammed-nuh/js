let num = 10;

let no1 = 0;
let no2 = 1;

console.log("Fibonacci Series: ");
console.log(no1);
console.log(no2);     

for (let i = 3; i <= num; i++) {
    let sum = no1 + no2;
    console.log(sum);
    no1 = no2;
    no2 = sum;    
}