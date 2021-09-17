import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book';
import { BooksState } from './books.reducer';

// reload available books list
export const loadBooks = createAction(
  '[books] Load books',
  props<{ books: Book[] }>()
);

export const requestBooks = createAction('[books] Request books');

export const setCurrentBook = createAction(
  '[books] Select book',
  props<{
    id: string;
  }>()
);

export const requestAddBook = createAction(
  '[books] Request add book',
  props<{
    name: string;
    description: string;
  }>()
);

export const addBook = createAction('[books] Add book', props<Book>());
