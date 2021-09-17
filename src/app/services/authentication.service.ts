import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { mockUsers } from './mockUsers';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor() {}

  login(name: string, password: string): Observable<User> {
    const mockUser = mockUsers.find(
      (user) => user.name === name && user.password === password
    );
    return of({
      name: mockUser?.name,
      id: mockUser?.id,
      accessLevel: mockUser?.accessLevel,
    } as User);
  }

  logout() {
    // remove user from local storage to log user out
  }
}
