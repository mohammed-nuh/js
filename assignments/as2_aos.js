let students = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
];

let filteredStudents = students.filter(std => std.marks > 60);
let avg = filteredStudents.reduce((total, std) => total + std.marks, 0) / filteredStudents.length;

console.log(students);
console.log(filteredStudents);
console.log(`Average => ${avg}`);
