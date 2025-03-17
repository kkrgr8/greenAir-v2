import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UserStore extends Store<UserState> {
  constructor() {
    super({ users: [] });
  }
}