import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  navItems = [
    {label:'Home', route: '/', icon: 'home'},
    { label: 'Books list', route: '/books', icon: 'library_books' },
    { label: 'Borrowed Books', route: '/borrowed', icon: 'book' },
    { label: 'Add Book', route: '/add-book', icon: 'add' },
    {label:'Manage Books', route: '/manage-books', icon: 'manage_accounts'},
  ];
}
