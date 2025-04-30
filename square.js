class Square {
    constructor(l){
        this.length = l;
    }

    calcPerimeter(){
        return 4 * this.length;
    }

    calcArea(){
        return this.length * this.length;
    }
}

const square1 = new Square(6);
console.log(`Perimeter : ${square1.calcPerimeter()}`);
console.log(`Area : ${square1.calcArea()}`);