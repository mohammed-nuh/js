let nums = [3, 3];
let target = 6;
let isFound = false;

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j] && i == j) {
            continue;
        }
        if ((nums[i] + nums[j]) == target) {
            console.log(`${i} and ${j}`);
            isFound = true;
            break;
        }
    }
    if (isFound) {
        break;
    }
}
