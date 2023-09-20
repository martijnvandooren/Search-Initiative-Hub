import { Component } from '@angular/core';
import { CommunityMembersGagdetComponent } from '../../gadgets/community-members-gagdet/community-members-gagdet.component';
import { TopVotingsGagdetComponent } from '../../gadgets/top-votings-gagdet/top-votings-gagdet.component';
import { FinanceStatusGagdetComponent } from '../../gadgets/finance-status-gagdet/finance-status-gagdet.component';

@Component({
  selector: 'app-right-colomn',
  templateUrl: './right-colomn.component.html',
  styleUrls: ['./right-colomn.component.scss']
})
export class RightColomnComponent {
  communityMembersContent = CommunityMembersGagdetComponent;
  communityMembersTitle = 'Community Members';

  topVotingsContent = TopVotingsGagdetComponent;
  topVotingsTitle = 'Top Three Votings';

  
  financeStatusContent = FinanceStatusGagdetComponent;
  financeStatusTitle = 'Financial Status'
}
