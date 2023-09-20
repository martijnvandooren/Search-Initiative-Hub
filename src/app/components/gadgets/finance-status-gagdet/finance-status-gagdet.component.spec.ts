import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStatusGagdetComponent } from './finance-status-gagdet.component';

describe('FinanceStatusGagdetComponent', () => {
  let component: FinanceStatusGagdetComponent;
  let fixture: ComponentFixture<FinanceStatusGagdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceStatusGagdetComponent]
    });
    fixture = TestBed.createComponent(FinanceStatusGagdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
