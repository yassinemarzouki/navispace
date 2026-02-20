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
    { label: 'Accueil', icon: 'fas fa-home', route: 'dashboard' },
    { label: 'Dashboard', icon: 'fas fa-chart-bar', route: 'dashboard' },
    { label: 'Commandes', icon: 'fas fa-shopping-cart', route: 'orders' },
    { label: 'Produits', icon: 'fas fa-cube', route: 'products' },
    { label: 'Analytics', icon: 'fas fa-chart-line', route: 'analytics' },
    { label: 'Applications', icon: 'fas fa-th', route: 'applications' },
    { label: 'Website', icon: 'fas fa-globe', route: 'website' },
    { label: 'Marketplace', icon: 'fas fa-store', route: 'marketplace' },
    { label: 'Agent Support', icon: 'fas fa-headset', route: 'support' },
    { label: 'Paramètres', icon: 'fas fa-cog', route: 'settings' }
  ];

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
