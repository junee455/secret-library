import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { booksFeatureKey, booksReducer } from './books.reducer';
import { BooksEffects } from './books.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(booksFeatureKey, booksReducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
})
export class BooksModule {}
