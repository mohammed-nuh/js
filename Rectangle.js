class Rectangle {
    length;
    width;

    constructor(l, w){
        this.length = l;
        this.width = w;
    }

    perimeter(){
        return 2 * (this.length + this.width);
    }

    area(){
        return this.length * this.width;
    }
}

let rect1 = new Rectangle(6, 4);
console.log(`Rectangle 1 - Base: ${rect1.length}, Height: ${rect1.width}, Area: ${rect1.area()}, Perimeter: ${rect1.perimeter()}`);
let rect2 = new Rectangle(8, 4);
console.log(`Rectangle 2 - Base: ${rect2.length}, Height: ${rect2.width}, Area: ${rect2.area()}, Perimeter: ${rect2.perimeter()}`);