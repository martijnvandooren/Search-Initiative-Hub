import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-honeycomb',
  templateUrl: './honeycomb.component.html',
  styleUrls: ['./honeycomb.component.scss']
})
export class HoneycombComponent {

@Input() data: any;

}
