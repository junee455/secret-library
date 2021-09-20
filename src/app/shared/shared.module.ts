import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  I18NextModule,
  I18NextPipe,
  I18NEXT_SERVICE,
  ITranslationService,
} from 'angular-i18next';

import * as EnJson from 'src/assets/locale/en.json';
import * as RuJson from 'src/assets/locale/ru.json';

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

export const I18N_PROVIDERS = [
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
  declarations: [],
  providers: [...I18N_PROVIDERS],
  imports: [CommonModule, I18NextModule.forRoot()],
  exports: [I18NextPipe],
})
export class SharedModule {}
