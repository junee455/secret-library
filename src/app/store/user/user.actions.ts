import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

// to store user data on login
export const loadUserData = createAction(
  '[user] Load user data',
  props<User>()
);

export const logout = createAction('[user] Logout');

export const login = createAction(
  '[user] Logint',
  props<{
    name: string;
    password: string;
  }>()
);
