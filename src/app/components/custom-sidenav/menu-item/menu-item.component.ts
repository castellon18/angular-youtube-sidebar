import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IMenuItems } from '../../../interfaces/menu-item.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations:[
    trigger('expandContractMenu', [
      transition(':enter', [
        style({opacity:0, height:'0px'}),
        animate('500ms ease-in-out', style({opacity:1, height:'*'}))
      ]),
      transition(':leave',[
        animate('500ms ease-in-out', style({opacity:0, height:'0px'}))
      ])
    ])
  ],
  imports: [RouterModule, MatListModule, MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  item = input.required<IMenuItems>();
  collapsed = input.required<boolean>();
  nestedMenuOpen = signal(false);

  toggleNested(): void {
    if(!this.item().subItem){
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
