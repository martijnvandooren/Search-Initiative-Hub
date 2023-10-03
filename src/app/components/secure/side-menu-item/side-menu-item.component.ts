import { Component, Input } from '@angular/core';
import { SideMenuItem } from 'src/app/classes/side-menu-item';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent {
  @Input() menuitem: any;
}
