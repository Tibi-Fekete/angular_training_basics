export class Book {
    private _title: string;
    private _author: string;
    private _releaseYear: Date;
    private _numberOfPages: number;

    constructor(title: string, author: string, releaseYear: Date, numberOfPages: number){
        this._title = title;
        this._author = author;
        this._releaseYear = releaseYear;
        this._numberOfPages = numberOfPages;
    }

    get title():string{
        return this._title;
    }
    get author():string{
        return this._author;
    }
    get releaseYear():Date{
        return this._releaseYear;
    }
    get numberOfPages():number{
        return this._numberOfPages;
    }

    get bookInfo(): string{
        return `${this.title} was written by ${this.author}, it was released in ${this.releaseYear}, consist of ${this.numberOfPages} written pages.`
    }

    get bookWeight(): number{
        return this.numberOfPages * 10 + 100;
    }
}
