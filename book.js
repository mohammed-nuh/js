class Book {
    author;
    title;
    pages;

    constructor(a, t, p){
        this.author = a;
        this.title = t;
        this.pages = p;
    }

    printDetails(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

let book1 = new Book("James Clear", "Atomic Habits", 200);
book1.printDetails();
