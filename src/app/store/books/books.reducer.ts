import { Book } from '../../models/book';
import { addBook, loadBooks, setCurrentBook } from './books.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const booksFeatureKey = 'books';

export interface BooksState extends EntityState<Book> {
  currentBook?: Book;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const booksInitialState: BooksState = adapter.getInitialState({});

const { selectAll } = adapter.getSelectors();

export const selectAllBooks = selectAll;

const reducer = createReducer(
  booksInitialState,
  on(loadBooks, (state, { books }) => adapter.setAll(books, state)),
  on(addBook, (state, book) => adapter.addOne(book, state)),
  on(setCurrentBook, (state, { id }) => ({
    ...state,
    currentBook: state.entities[id],
  }))
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
