import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMembersGagdetComponent } from './community-members-gagdet.component';

describe('CommunityMembersGagdetComponent', () => {
  let component: CommunityMembersGagdetComponent;
  let fixture: ComponentFixture<CommunityMembersGagdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityMembersGagdetComponent]
    });
    fixture = TestBed.createComponent(CommunityMembersGagdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
