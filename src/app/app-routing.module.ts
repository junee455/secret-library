import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';

import { ReaderComponent } from './store/reader/reader.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterCardsComponent } from './chapter-cards/chapter-cards.component';
import { ChapterGridComponent } from './chapter-grid/chapter-grid.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'library',
    canActivate: [AuthGuard],
    component: LibraryComponent,
    children: [
      {
        path: ':id',
        component: ChaptersComponent,
        children: [
          {
            path: 'cards',
            component: ChapterCardsComponent,
          },
          {
            path: 'grid',
            component: ChapterGridComponent,
          },
        ],
      },
      {
        path: 'read/:bookId/:chapter',
        component: ReaderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
