let products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];

let filteredProducts = products.filter(product => product.stock > 10);
let updatedProducts = filteredProducts.map(product => ({...product, price: product.price + (0.15 * product.price)}));

console.log(products);
console.log(filteredProducts);
console.log(updatedProducts);
