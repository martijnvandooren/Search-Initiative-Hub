import { Component, OnInit } from '@angular/core';
import { VotingSubject } from 'src/app/classes/VotingSubject';
import { VotingOption } from 'src/app/classes/VotingOption';
import { animate, style, transition, trigger } from '@angular/animations';
import { SharedService } from 'src/app/services/shared.service';
import { VotingService } from 'src/app/services/get-votings.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
  animations: [
    trigger('slide', [
      transition('* => *', [
        animate('5000ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})

export class VotingComponent implements OnInit {

  constructor(private sharedService: SharedService, private votingService: VotingService) {}
  votingSubjects: VotingSubject[] = [];
  // Define a flag to track if the order has changed
  orderChanged = false;
  isInitialized = false;

  ngOnInit(): void {
    // Set the flag to true when the component initializes
    this.isInitialized = true;
    this.votingSubjects = this.votingService.getExampleSubjects();
    const topSubject = this.getTopVotingSubject();
    this.sharedService.setTopVotingSubject(topSubject);
  }

  // Method to handle user voting
  vote(subject: VotingSubject, option: VotingOption) {
    // Increment the vote count for the selected option
    option.votes++;

    // Sort the options within the subject based on votes (descending order)
    subject.options.sort((a, b) => b.votes - a.votes);

    // Set the flag to trigger the animation
    this.orderChanged = true;

    // Delay resetting the flag to trigger the animation
    setTimeout(() => {
      this.orderChanged = false;
    }, 6000); // Adjust the delay as needed to match your animation duration
  }

  calculatePercentage(votes: number, totalVotes: number): number {
    return Math.floor(totalVotes > 0 ? (votes / totalVotes) * 100 : 0);
  }
  
  getTotalVotes(optionsId: number): number {
    return this.votingService.getTotalVotesOfSubject(optionsId);
  }

  sortedOptions(subject: VotingSubject): VotingOption[] {
    return subject.options.slice().sort((a, b) => b.votes - a.votes);
  }

  trackByOption(index: number, option: VotingOption): number {
    return option.id;
  }

  getTopVotingSubject(): VotingSubject {
    // Sort the subjects based on the votes of their first option (assuming it's the highest)
    this.votingSubjects.sort((a, b) => b.options[0].votes - a.options[0].votes);

    // TODO: return null if no VotingSubjects are found.
    // Return the top voting subject (or null if there are no subjects)
    return this.votingSubjects.length > 0 ? this.votingSubjects[0] : this.votingSubjects[0];
  }
}
