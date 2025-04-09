let nums = [1,2,4];
let target = 6;

let no1 = nums[0];
let no2 = nums[1];

for (let i = 1; i < nums.length; i++) {
    if (no1 + no2 == target) {
        console.log(`${nums.indexOf(no1)} and ${nums.indexOf(no2)}`);
        break;
    } else {
        no2 = nums[nums.indexOf(no2) + 1];
    }
}