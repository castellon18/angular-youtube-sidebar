import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IMenuItems } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatDividerModule
],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})
export class CustomSideNavComponent {
  public menuItem: IMenuItems[] = [
    {
      id: 1,
      icon: 'dashboard',
      label: 'Dashboard',
      router: 'home',
    },
    {
      id: 2,
      icon: 'groups',
      label: 'Personas',
      router: 'home/persona',
    },
    {
      id: 3,
      icon: 'person',
      label: 'Usuarios',
      router: 'home/usuario',
    },
    {
      id: 4,
      icon: 'logout',
      label: 'Salir',
      router: 'login',
    },
  ];

  sidenavCollapsed = input.required();
  profilePictureSize = computed( () => this.sidenavCollapsed() ? '32' : '100' );
}
