import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss'],
})
export class MembershipCardComponent {
  @Input() service: any;
  isHovered: boolean = false;

  onMouseEnter(){
    this.isHovered = true;
  }
  onMouseLeave(){
    this.isHovered = false;
  }
}
