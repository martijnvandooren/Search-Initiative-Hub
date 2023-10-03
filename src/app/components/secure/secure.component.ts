import { Component } from '@angular/core';
import { SideMenuItem } from 'src/app/classes/side-menu-item';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent {
  sideMenuItems: SideMenuItem[] = [
    new SideMenuItem('Goals', 'Current goals'),
    new SideMenuItem('Projects', 'Current projects'),
    new SideMenuItem('Voting', 'Vote!'),
    new SideMenuItem('Statistics', 'SEARCH Statistics')
  ]
}
