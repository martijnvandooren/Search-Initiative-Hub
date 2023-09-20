import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVotingsGagdetComponent } from './top-votings-gagdet.component';

describe('TopVotingsGagdetComponent', () => {
  let component: TopVotingsGagdetComponent;
  let fixture: ComponentFixture<TopVotingsGagdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopVotingsGagdetComponent]
    });
    fixture = TestBed.createComponent(TopVotingsGagdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
