import { Component, Input } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { AccessLevel } from '../models/user';

@Component({
  selector: 'app-chapter-cards',
  templateUrl: './chapter-cards.component.html',
  styleUrls: ['./chapter-cards.component.scss'],
})
export class ChapterCardsComponent {
  @Input() book!: Book;
  @Input() accessLevel!: AccessLevel;

  constructor(private router: Router) {}

  public readChapter(chapter: string) {
    this.router.navigate([`library/read/${this.book?.id}/${chapter}`]);
  }
}
