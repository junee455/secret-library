import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from '../models/book';

import { mockBooks } from './mockBooks';
import { mockUsers } from './mockUsers';

@Injectable()
export class BooksService {
  constructor() {}

  public getAllBooks(userId: string): Observable<Book[]> {
    const accessLevel =
      mockUsers.find((user) => user.id === userId)?.accessLevel || 4;
    return of(
      mockBooks.filter((book) => (book?.accessLevel || 3) >= accessLevel)
    );
  }

  // if new book is created server should return same book entity with id
  public createBook(book: Book): Observable<Book> {
    const newBook = JSON.parse(JSON.stringify(book));
    newBook.id = Math.round(Math.random() * 100).toString();
    return of(newBook);
  }

  public addBook(name: string, description: string): Observable<Book> {
    const newBook: Book = {
      name: name,
      description: description,
      id: Math.floor(Math.random() * 100).toString(),
    };
    return of(newBook);
  }
}
