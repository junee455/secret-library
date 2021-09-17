import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, filter } from 'rxjs/operators';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BooksService } from '../../services/books.service';
import { UserState } from '../user/user.reducer';
import { selectUser } from '../user/user.selectors';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {
  requestBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.requestBooks),
      switchMap(() => this.store.select(selectUser)),
      filter((user: User | undefined) => !!user),
      switchMap((user: User | undefined) =>
        this.booksService.getAllBooks(user?.id || '')
      ),
      map((books) =>
        BooksActions.loadBooks({
          books: books,
        })
      )
    )
  );

  addBook = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.requestAddBook),
      switchMap((action) =>
        this.booksService.addBook(action.name, action.description || '')
      ),
      map((book: Book) => BooksActions.addBook(book))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<UserState>,
    private booksService: BooksService
  ) {}
}
