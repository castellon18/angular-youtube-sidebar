import { Component, computed, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { IMenuItems } from '../../interfaces/menu-item.interface';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatDividerModule,
    MenuItemComponent
],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})
export class CustomSideNavComponent {

  menuItem = signal<IMenuItems[]>([
    {
      id: 1,
      icon: 'dashboard',
      label: 'Dashboard',
      router: 'dashborad',
    },
    {
      id: 2,
      icon: 'video_library',
      label: 'Content',
      router: 'content',
      subItem: [
        {
          id: 1,
          icon: 'play_circle',
          label: 'Videos',
          router: 'videos'
        },
        {
          id: 2,
          icon: 'playlist_play',
          label: 'PlayLists',
          router: 'playlists'
        },
        {
          id: 3,
          icon: 'post_add',
          label: 'Posts',
          router: 'posts'
        }
      ]
    },
    {
      id:3,
      icon:'analytics',
      label: 'Analytics',
      router: 'analytics'
    },
    {
      id:4,
      icon:'comment',
      label: 'Comments',
      router: 'comments'
    }
  ]);

  sidenavCollapsed = input.required<boolean>();
  profilePictureSize = computed( () => this.sidenavCollapsed() ? '32' : '100' );
}
