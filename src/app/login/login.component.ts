import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { User } from '../models/user';
import { login } from '../store/user/user.actions';
import { UserState } from '../store/user/user.reducer';
import { selectUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  public formGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public onSubmit() {
    if (this.formGroup.valid) {
      this.store.dispatch(
        login({
          name: this.formGroup.get('login')?.value,
          password: this.formGroup.get('password')?.value,
        })
      );
    }
  }

  constructor(private store: Store<UserState>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .pipe(
        takeUntil(this.destroy$),
        filter((user) => {
          return !!user;
        })
      )
      .subscribe(() => {
        this.router.navigate(['library']);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
