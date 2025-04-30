let strings = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
];

let filteredStrings = strings.filter(string => string.length > 5);
let upperCaseStrings = strings.map(string => string.toUpperCase());
let containsA = strings.filter(string => string.toLowerCase().includes('a'));
let processedStrings = strings.map(string => string + " - Processed");

console.log("Original Strings:", strings);
console.log("Filtered (length > 5):", filteredStrings);
console.log("Uppercase Strings:", upperCaseStrings);
console.log("Strings Containing 'a':", containsA);
console.log("Processed Strings:", processedStrings);


