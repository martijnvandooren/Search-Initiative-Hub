import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColomnComponent } from './right-colomn.component';

describe('RightColomnComponent', () => {
  let component: RightColomnComponent;
  let fixture: ComponentFixture<RightColomnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightColomnComponent]
    });
    fixture = TestBed.createComponent(RightColomnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
