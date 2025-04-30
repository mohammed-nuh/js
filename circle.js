class Circle {
    constructor(r){
        this.radius = r;
    }

    calcPerimeter(){
        return 2 * Math.PI * this.radius;
    }

    calcArea(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle(7);
console.log(`Perimeter : ${circle1.calcPerimeter().toFixed(2)}`);
console.log(`Area : ${circle1.calcArea().toFixed(2)}`);