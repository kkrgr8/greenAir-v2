import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  constructor(protected override store: UserStore) {
    super(store);
  }

  users$ = this.select(state => state.users);
  activeUsers$ = this.select(state => state.users.filter(user => user.isActive));
}