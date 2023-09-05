import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneycombGridComponent } from './honeycomb-grid.component';

describe('HoneycombGridComponent', () => {
  let component: HoneycombGridComponent;
  let fixture: ComponentFixture<HoneycombGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoneycombGridComponent]
    });
    fixture = TestBed.createComponent(HoneycombGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
