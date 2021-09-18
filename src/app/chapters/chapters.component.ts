import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book } from '../models/book';
import { AccessLevel } from '../models/user';
import { setCurrentBook } from '../store/books/books.actions';
import { BooksState } from '../store/books/books.reducer';
import { selectCurrentBook } from '../store/books/books.selectors';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss'],
})
export class ChaptersComponent implements OnInit, OnDestroy {
  private $destroy: Subject<void> = new Subject();

  public displayMode: 'cards' | 'table' = 'table';

  public book!: Book;

  public accessLevel = this.getAccessLevel();

  public switchDisplayMode() {
    if (this.displayMode === 'cards') {
      this.displayMode = 'table';
    } else {
      this.displayMode = 'cards';
    }
    this.router.navigate(['library', this.book.id, { mode: this.displayMode }]);
  }

  private getAccessLevel(): AccessLevel {
    return Number(localStorage.getItem('access')) || AccessLevel.Low;
  }

  constructor(
    private store: Store<BooksState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('accessLevel: ', this.accessLevel);
    this.activatedRoute.params
      .pipe(takeUntil(this.$destroy))
      .subscribe((params) => {
        if (!params.mode) {
          this.router.navigate([
            'library',
            params.id,
            { mode: this.displayMode },
          ]);
        } else {
          this.displayMode = params.mode;
        }
        this.store.dispatch(setCurrentBook({ id: params.id }));
      });
    this.store
      .select(selectCurrentBook)
      .pipe(takeUntil(this.$destroy))
      .subscribe((book) => {
        if (book) {
          this.book = book;
        }
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
