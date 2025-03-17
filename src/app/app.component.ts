import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './ui-widgets/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Green Air V2';
}
