import { Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { User } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore) {}

  addUser(user: User) {
    this.userStore.update(state => ({
      users: [...state.users, user]
    }));
  }

  updateUser(id: string, updatedUser: Partial<User>) {
    this.userStore.update(state => ({
      users: state.users.map(user => 
        user.id === id ? { ...user, ...updatedUser } : user
      )
    }));
  }

  deleteUser(id: string) {
    this.userStore.update(state => ({
      users: state.users.filter(user => user.id !== id)
    }));
  }
}