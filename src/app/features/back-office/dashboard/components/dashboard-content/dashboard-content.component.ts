import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  trend?: string;
}

interface Order {
  id: string;
  customer: string;
  total: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {
  cards: StatCard[] = [
    { title: 'Ventes Totales', value: '€45,231', icon: '💰', color: '#007bff', trend: '+12.5%' },
    { title: 'Commandes', value: '328', icon: '📦', color: '#28a745', trend: '+8.2%' },
    { title: 'Clients', value: '2,456', icon: '👥', color: '#ffc107', trend: '+5.1%' },
    { title: 'Produits', value: '156', icon: '🛍️', color: '#dc3545', trend: '+2.3%' }
  ];

  recentOrders: Order[] = [
    { id: '#ORD-001', customer: 'Jean Dupont', total: '€125.50', status: 'Livré', date: '2026-02-20' },
    { id: '#ORD-002', customer: 'Marie Martin', total: '€89.99', status: 'En cours', date: '2026-02-19' },
    { id: '#ORD-003', customer: 'Pierre Bernard', total: '€234.00', status: 'Pending', date: '2026-02-18' },
    { id: '#ORD-004', customer: 'Sophie Legrand', total: '€156.75', status: 'Livré', date: '2026-02-17' },
    { id: '#ORD-005', customer: 'Marc Durand', total: '€92.30', status: 'Annulé', date: '2026-02-16' }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'Livré':
        return 'status-success';
      case 'En cours':
        return 'status-pending';
      case 'Annulé':
        return 'status-danger';
      default:
        return 'status-default';
    }
  }
}
