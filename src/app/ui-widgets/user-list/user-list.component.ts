// To be deleted

import { Component } from '@angular/core';
import { UserQuery } from '../../state/user/user.query';
import { UserService } from '../../state/user/user.service';
import { User } from '../../models/user.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports:[CommonModule, AsyncPipe],
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent {
  users$ = this.userQuery.users$;

  constructor(
    private userQuery: UserQuery,
    private userService: UserService,
    protected themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.set('light')
  }

  addUser(name: string, email: string) {
    if (!name || !email) return;

    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      isActive: true
    };

    this.userService.addUser(user);
  }

  toggleUserStatus(user: User) {
    this.userService.updateUser(user.id, { isActive: !user.isActive });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId);
  }
}