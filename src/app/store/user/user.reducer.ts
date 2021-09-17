import { User } from 'src/app/models/user';
import { loadUserData, logout } from './user.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const userFeatureKey = 'user';

export interface UserState {
  user?: User;
}

export const userInitialState: UserState = {};

const reducer = createReducer(
  userInitialState,
  on(loadUserData, (state, user: User) => (user.id ? { user } : {})),
  on(logout, (state) => ({}))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
