import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  isSidebarOpen = true;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: '📊', route: 'dashboard' },
    { label: 'Produits', icon: '🛍️', route: 'products' },
    { label: 'Commandes', icon: '📦', route: 'orders' },
    { label: 'Clients', icon: '👥', route: 'users' },
    { label: 'Rapports', icon: '📈', route: '#' },
    { label: 'Paramètres', icon: '⚙️', route: '#' },
    { label: 'Aide', icon: '❓', route: '#' }
  ];

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
