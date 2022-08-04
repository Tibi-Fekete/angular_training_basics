import {Book} from './book';

export class Bookshelf {

    private books: Book[] = [];

    addBook(book: Book): void{
        this.books.push(book);
    }

    getBooks(year: number): Book[]{
        return this.books.filter(book => book.releaseYear.getFullYear() === year);
    }

    getLightestAuthor(): string{
        const lighestBook =  this.books.reduce((a,b) => a.bookWeight < b.bookWeight ? a : b);
        return lighestBook.author;
    }

    getAuthorOfMostWrittenPages(): string{
        const longestBook = this.books.reduce((a,b) => a.numberOfPages > b.numberOfPages ? a : b);
        return longestBook.author;
    }

    printBooks(): void{
        this.books.forEach(book => console.log(book.bookInfo))
    }
}
