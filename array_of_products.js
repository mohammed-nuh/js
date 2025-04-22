class Product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    display(){
        console.log(`----- Details of ${this.name} -----`);
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log();
    }
}

let productArray = [];
let product1 = new Product("Iphone 14 Pro", 80000, "some dummy description", 10);
let product2 = new Product("Macbook Pro", 160000, "some dummy description", 5);
let product3 = new Product("Asus Monitor", 10000, "some dummy description", 15);
let product4 = new Product("Apple Vision Pro", 200000, "some dummy description", 2);
productArray.push(product1, product2, product3, product4);

productArray.forEach(product => product.quantity >= 10 ? product.price *= 0.8 : product.price *= 1);
productArray.forEach(product => product.display());
