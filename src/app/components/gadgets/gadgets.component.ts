import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss'],
})
export class GadgetComponent implements AfterViewInit {
  @Input() gadgetContent: any; // Input to receive the component type
  @Input() gadgetContentTitle!: string; // Input to receive the title
  @ViewChild('gadgetContainer', { read: ViewContainerRef }) gadgetContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    if (this.gadgetContent) {
      try {
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.gadgetContent);
        this.gadgetContainer.clear();
        const componentRef = factory.create(this.gadgetContainer.injector);
        this.gadgetContainer.insert(componentRef.hostView);
        // Rest of your code here
      } catch (error) {
        console.error('Error resolving component factory:', error);
      }
    }
  }
}