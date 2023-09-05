import { Component } from '@angular/core';
import { HoneyGridItem } from 'src/app/classes/HoneyGridItem';

@Component({
  selector: 'app-honeycomb-grid',
  templateUrl: './honeycomb-grid.component.html',
  styleUrls: ['./honeycomb-grid.component.scss']
})
export class HoneycombGridComponent {
  HoneyGridItems: HoneyGridItem[] = [
    new HoneyGridItem("Space Development", "", "../../../assets/cubesat.jpg"),
    new HoneyGridItem("Decide toghether", "", "../../../assets/Digital_hub_logo_2.max-400x400.png"),
    new HoneyGridItem("Human Future", "", "../../../assets/starship.jpg"),
    new HoneyGridItem("Tech Tree", "", "../../../assets/technology_for_people-1.jpg"),
    new HoneyGridItem("Voting System", "", "../../../assets/Logo.png"),
    new HoneyGridItem("Contribute", "", "../../../assets/portal.jfif"),
    new HoneyGridItem("Work", "", "../../../assets/Career.jfif"),
  ];
}
