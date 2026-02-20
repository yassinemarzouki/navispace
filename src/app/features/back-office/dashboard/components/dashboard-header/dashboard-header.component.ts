import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  userMenu = false;
  notifications = 3;

  user = {
    name: 'Admin NaviSpace',
    email: 'admin@navispace.com',
    avatar: '👤'
  };

  toggleUserMenu(): void {
    this.userMenu = !this.userMenu;
  }

  logout(): void {
    console.log('Déconnexion...');
  }
}
