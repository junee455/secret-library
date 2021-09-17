import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddBookComponent } from '../add-book/add-book.component';
import {
  requestAddBook,
  requestBooks,
  setCurrentBook,
} from '../store/books/books.actions';
import { BooksState } from '../store/books/books.reducer';
import {
  selectAllBooks,
  selectCurrentBook,
} from '../store/books/books.selectors';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { logout } from '../store/user/user.actions';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit, OnDestroy {
  private $destroy: Subject<void> = new Subject();

  public books: Book[] = [];
  public showMenu = true;
  public forceHideMenu = false;
  public selectedBook: Book | undefined;

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public logout() {
    this.store.dispatch(logout());
    this.router.navigate(['login']);
  }

  // open material dialog to add new book
  public addBook(): void {
    const dialogRef = this.dialog.open(AddBookComponent, {});

    dialogRef.afterClosed().subscribe((result: Book) => {
      if (result) {
        this.store.dispatch(
          requestAddBook({
            name: result.name,
            description: result.description || '',
          })
        );
      }
    });
  }

  public selectBook(id: string): void {
    this.store.dispatch(setCurrentBook({ id }));
    this.router.navigate(['library/', id]);
  }

  constructor(
    private store: Store<BooksState>,
    private router: Router,
    private readonly viewportRuler: ViewportRuler,
    private readonly ngZone: NgZone,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.viewportRuler
      .change(200)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        const width = this.viewportRuler.getViewportSize().width;
        this.ngZone.run(() => {
          if (width < 1000) {
            if (!this.forceHideMenu) {
              this.showMenu = false;
            }
            this.forceHideMenu = true;
          } else {
            this.forceHideMenu = false;
          }
        });
      });
    this.store.dispatch(requestBooks());
    this.store
      .select(selectAllBooks)
      .pipe(takeUntil(this.$destroy))
      .subscribe((books) => {
        this.books = books;
      });
    this.store
      .select(selectCurrentBook)
      .pipe(takeUntil(this.$destroy))
      .subscribe((book) => {
        this.selectedBook = book;
      });
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
