import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { I18NextPipe } from 'angular-i18next';
import { SharedModule } from '../shared/shared.module';

import { ChapterCardsComponent } from './chapter-cards.component';

describe('ChapterCardsComponent', () => {
  let component: ChapterCardsComponent;
  let fixture: ComponentFixture<ChapterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SharedModule],
      imports: [RouterTestingModule],
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
