let numbers = [7, 6, 2, 9, 5];

numbers.forEach((num) =>  {
    if (num % 2 == 0) {
        console.log(num.toString().concat("_even"));
    } else {
        console.log(num.toString().concat("_odd"));
    }
});