import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Cheap CubeSats', cols: 1, rows: 1, imageSource: '../../../assets/cubesat.jpg', imageAlt:'CubeSats for everyone!' },
          { title: 'Collaboration Hub', cols: 1, rows: 1, imageSource: '../../../assets/Digital_hub_logo_2.max-400x400.png', imageAlt:'' },
          { title: 'Website', cols: 1, rows: 1, imageSource: '../../../assets/Capture.PNG', imageAlt:'' },
          { title: 'Achievements', cols: 1, rows: 1, imageSource: '../../../assets/achievement.png', imageAlt:'' }
        ];
      }

      return [
        { title: 'Cheap CubeSats', cols: 2, rows: 1, imageSource: '../../../assets/cubesat.jpg', imageAlt:'CubeSats for everyone!' },
        { title: 'Collaboration Hub', cols: 1, rows: 1, imageSource: '../../../assets/Digital_hub_logo_2.max-400x400.png', imageAlt:'Collaboration hub where every piece of information is present' },
        { title: 'Website', cols: 1, rows: 2, imageSource: '../../../assets/Capture.PNG', imageAlt:'' },
        { title: 'Achievements', cols: 1, rows: 1, imageSource: '../../../assets/achievement.png', imageAlt:'' }
      ];
    })
  );
}
