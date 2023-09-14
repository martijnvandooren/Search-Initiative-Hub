import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCardsComponent } from './join-cards.component';

describe('JoinCardsComponent', () => {
  let component: JoinCardsComponent;
  let fixture: ComponentFixture<JoinCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinCardsComponent]
    });
    fixture = TestBed.createComponent(JoinCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
