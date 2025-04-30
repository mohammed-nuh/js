class Car {
    brand;
    model;
    year;
    price;

    constructor(b, m, y, p){
        this.brand = b;
        this.model = m;
        this.year = y;
        this.price = p;
    }
}

let carArray = [];
let car1 = new Car('Toyota', 'Camry', 2017, 300000);
let car2 = new Car('Renault', 'Triber', 2024, 700000);
let car3 = new Car('Hyundai', 'Eon', 2010, 350000);
let car4 = new Car('Renault', 'Duster', 2018, 500000);
let car5 = new Car('Ford', 'Mustang', 2016, 3000000);
let car6 = new Car('Lamborghini', 'Urus', 2020, 50000000);
carArray.push(car1, car2, car3, car4, car5, car6);

// let sumPrice = 0;
// carArray.forEach((car) => sumPrice += car.price);
let sumPrice = carArray.reduce((sum, car) => sum + car.price, 0); 

let averagePrice = sumPrice / carArray.length;
console.log(`Average Price of Cars => Rs.${Math.round(averagePrice)}`);


let RenaultCarObjects = carArray.filter(carObject => carObject.brand == 'Renault');
let RenaultCars = RenaultCarObjects.map(car => car.model);
console.log(`Cars with brand Renault => ${RenaultCars}`);

