import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksState } from '../books/books.reducer';
import { Store } from '@ngrx/store';
import { selectBookById } from '../books/books.selectors';
import { Book, Chapter } from 'src/app/models/book';
import { filter } from 'rxjs/operators';
import { setCurrentBook } from '../books/books.actions';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent implements OnInit {
  public chapter: Chapter | undefined;
  private bookId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<BooksState>,
    private router: Router
  ) {}

  public quit() {
    this.router.navigate(['library', this.bookId]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.store
        .select(selectBookById, { id: params.bookId })
        .pipe(filter((book) => !!book))
        .subscribe((book: Book | undefined) => {
          this.chapter = book!.chapters?.find(
            (chapter) => chapter.name === params.chapter
          );
          this.bookId = book!.id;
          this.store.dispatch(setCurrentBook({ id: book!.id }));
        });
    });
  }
}
