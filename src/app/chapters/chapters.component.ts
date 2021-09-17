import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book } from '../models/book';
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

  public book: Book | undefined;

  public switchDisplayMode() {
    if (this.displayMode === 'cards') {
      this.displayMode = 'table';
    } else {
      this.displayMode = 'cards';
    }
  }

  constructor(
    private store: Store<BooksState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.$destroy))
      .subscribe((params) => {
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
