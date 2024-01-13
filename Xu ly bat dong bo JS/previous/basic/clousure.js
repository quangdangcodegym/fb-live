// let n1 = 10;

// // pure function
// function sum(n2){
//     var n3 = 100;
//     return n1 + n2;
// }

// console.log(n3);

// function counter(){
//     let count = 0;
//     function increament(){
//         return ++count;
//     }

//     return increament;
// }

// let app = counter();
// console.log(app());
// console.log(app());
// console.log(app());


function bookManager() {
    let books = ["Toán 12", "Lý 11", "Hóa 10"];
    return {
        addBook(bookName) {
            books.push(bookName);
        },
        getBooks() {
            return books.toString();
        },
        resetData() {
            books = [];
        }
    }
}

let bookApp = bookManager();
bookApp.addBook("Văn 10");
books = [];
console.log(bookApp.getBooks());



