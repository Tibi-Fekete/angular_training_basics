import { Book } from "./book";
import { Bookshelf } from "./bookshelf";

const bookshelf = new Bookshelf();

const newBook3 = new Book('Messiah of Dune', 'Herbert, F.', new Date('1989-03-03'), 234);
bookshelf.addBook(newBook3);

const newBook1 = new Book('Dune', 'Herbert, F.', new Date('1985-06-25'), 432);
bookshelf.addBook(newBook1);
console.log(newBook1.bookWeight);

const newBook2 = new Book('Children of Dune', 'Herbert, F.', new Date('1987-03-02'), 322);
bookshelf.addBook(newBook2);
console.log(newBook2);

bookshelf.printBooks();
console.log(bookshelf.getLightestAuthor());
console.log(bookshelf.getAuthorOfMostWrittenPages());
console.log(bookshelf.getBooks(1989));
