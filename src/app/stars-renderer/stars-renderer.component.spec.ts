import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRendererComponent } from './stars-renderer.component';

describe('StarsRendererComponent', () => {
  let component: StarsRendererComponent;
  let fixture: ComponentFixture<StarsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarsRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
