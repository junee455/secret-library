import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Chapter } from '../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any> | null = null;
  @Input() ratingTemplate: TemplateRef<any> | null = null;
  @Input() previewTemplate: TemplateRef<any> | null = null;
  @Input() chapter!: Chapter;

  constructor() {}

  ngOnInit(): void {}
}
