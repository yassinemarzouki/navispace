import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardSidebarComponent,
    DashboardHeaderComponent,
    DashboardContentComponent
  ],
  template: `
    <div class="dashboard-layout">
      <app-dashboard-sidebar></app-dashboard-sidebar>

      <div class="dashboard-main">
        <app-dashboard-header></app-dashboard-header>

        <div class="dashboard-container">
          <app-dashboard-content></app-dashboard-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
