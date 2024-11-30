import { Component } from '@angular/core';

@Component({
  selector: 'user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = ['Alice', 'Bob', 'Charlie'];
}
