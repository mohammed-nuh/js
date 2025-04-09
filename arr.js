let marks = [75, 98, 63];
marks.push(45);
marks.push(89);

console.log(marks);

// sum of marks
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];  
}

console.log(`Sum of marks in marks array => ${sum}`);

let avg = sum / marks.length;

console.log(`Average of marks of marks array => ${avg}`);

