import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterCardsComponent } from './chapter-cards.component';

describe('ChapterCardsComponent', () => {
  let component: ChapterCardsComponent;
  let fixture: ComponentFixture<ChapterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
