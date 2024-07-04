class Product {
    constructor() {
        this.productName;
        this.productPrice;
    }

    setProductName(name) {
        this.productName = name
    }
    
    setProductPrice(nominal) {
        this.productPrice = nominal
    }
}

class Book extends Product {
    constructor() {
        super()
        this.author
    }

    setAuthor(authorName) {
        this.author = authorName
    }

    getAuthor() {
        return this.author
    }    
}

const book = new Book()
book.setAuthor("J. R. R. Tolkien")
book.setProductName("Book B")
book.setProductPrice(100000)

console.log(book)

const product = new Product()
console.log(book instanceof Book)
console.log(book instanceof Product)
console.log(product instanceof Product)
console.log(product instanceof Book)
