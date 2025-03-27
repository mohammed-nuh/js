let rows = 5;
let starString = "";

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        starString = starString.concat("*");        
    }
    console.log(starString);
    starString = "";
}