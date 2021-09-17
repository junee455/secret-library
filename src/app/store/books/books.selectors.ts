import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectRouteParams } from '../router.selectors';
import * as fromBooks from './books.reducer';
// { booksFeatureKey, BooksState, selectAllBooks }
// selectFeature will have the type MemoizedSelector<object, FeatureState>
export const selectBooksState = createFeatureSelector<fromBooks.BooksState>(
  fromBooks.booksFeatureKey
);

// selectFeatureCount will have the type MemoizedSelector<object, number>
export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAllBooks
);

export const selectBookById = createSelector(
  selectBooksState,
  (state: fromBooks.BooksState, props: { id: string }) =>
    state.entities[props.id]
);

export const selectCurrentBook = createSelector(
  selectBooksState,
  selectRouteParams,
  (state) => state.currentBook
);
