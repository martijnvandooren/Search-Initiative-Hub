import { Component, OnInit } from '@angular/core';
import { VotingOption } from 'src/app/classes/VotingOption';
import { VotingSubject } from 'src/app/classes/VotingSubject';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-top-votings-gagdet',
  templateUrl: './top-votings-gagdet.component.html',
  styleUrls: ['./top-votings-gagdet.component.scss']
})
export class TopVotingsGagdetComponent implements OnInit{

  topVotingSubjects: VotingSubject[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to the topVotingSubjects$ observable
    this.sharedService.topVotingSubjects$.subscribe((subjects) => {
      this.topVotingSubjects = subjects;
    });
  }

  // Public method to get the most voted option title for a subject
  getMostVotedOptionTitle(subject: VotingSubject): string {
    return subject.mostVotedOption().smallTitle;
  }

  calculatePercentageMostVotedOption(subject : VotingSubject) { 
    return this.calculatePercentage(subject, subject.mostVotedOption());
  }

  calculatePercentage(subject:VotingSubject, option : VotingOption) : number {
    const totalvotes = subject.numberOfTotalVotes();
    return Math.floor(totalvotes > 0 ? (option.votes / totalvotes) * 100 : 0);
  }

  getMostVotedOptionVotes(subject: VotingSubject): number {
    return subject.mostVotedOption().votes;
  }
}
