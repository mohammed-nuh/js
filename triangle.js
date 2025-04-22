class Triangle {
    base;
    height;

    constructor(b, h){
        this.base = b;
        this.height = h;
    }

    area(){
        return (this.base * this.height) / 2;
    }
}

let triangle1 = new Triangle(5, 10);
console.log(`Triangle 1 - Base: ${triangle1.base}, Height: ${triangle1.height}, Area: ${triangle1.area()}`);
let triangle2 = new Triangle(6, 12);
console.log(`Triangle 2 - Base: ${triangle2.base}, Height: ${triangle2.height}, Area: ${triangle2.area()}`);

