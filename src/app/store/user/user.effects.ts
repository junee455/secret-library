import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as userActions from './user.actions';
import { User } from 'src/app/models/user';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      switchMap((action) =>
        this.authenticationService.login(action.name, action.password)
      ),
      map((user: User) => {
        localStorage.setItem('token', user.name + user.id);
        localStorage.setItem('id', String(user.id));
        return userActions.loadUserData(user)
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}
}
