import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule } from '@angular/material/button';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChapterGridComponent } from './chapter-grid/chapter-grid.component';
import { ChapterCardsComponent } from './chapter-cards/chapter-cards.component';
import { StoreModule } from '@ngrx/store';
import {
  I18NextModule,
  I18NEXT_SERVICE,
  ITranslationService,
} from 'angular-i18next';

import { BooksService } from './services/books.service';
import { environment } from '../environments/environment';
import { BooksModule } from './store/books/books.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReaderComponent } from './store/reader/reader.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { UserModule } from './store/user/user.module';
import { AuthenticationService } from './services/authentication.service';
import { StarsRendererComponent } from './stars-renderer/stars-renderer.component';
import { CardComponent } from './card/card.component';

import * as EnJson from '../assets/locale/en.json';
import * as RuJson from '../assets/locale/ru.json';

export function appInit(i18next: ITranslationService) {
  console.log(EnJson);
  return () =>
    i18next.init({
      supportedLngs: ['en', 'ru'],
      fallbackLng: 'en',
      debug: true,
      returnEmptyString: false,
      resources: {
        en: {
          translation: EnJson,
        },
        ru: {
          translation: RuJson,
        },
      },
      ns: ['translation'],
    });
}

function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    LoginComponent,
    LibraryComponent,
    AddBookComponent,
    ChapterGridComponent,
    ChapterCardsComponent,
    ReaderComponent,
    StarsRendererComponent,
    CardComponent,
  ],
  imports: [
    I18NextModule.forRoot(),
    AgGridModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BooksModule,
    UserModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [BooksService, AuthenticationService, ...I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
