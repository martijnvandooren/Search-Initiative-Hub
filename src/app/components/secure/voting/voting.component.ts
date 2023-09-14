import { Component, OnInit } from '@angular/core';
import { VotingSubject } from 'src/app/classes/VotingSubject';
import { VotingOption } from 'src/app/classes/VotingOption';
import { animate, style, transition, trigger, keyframes } from '@angular/animations';

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
  // Define a flag to track if the order has changed
  orderChanged = false;
  isInitialized = false;

  // Define an array of voting options with initial vote counts
  votingOptions1: VotingOption[] = [
    { id: 1, title: 'A communication network for all the planets', votes: 0 },
    { id: 2, title: 'Design buildings on mars', votes: 0 },
    { id: 3, title: 'Setup manufacturing in space', votes: 0 }
    // Add more options as needed
  ];
  votingOptions2: VotingOption[] = [
    { id: 1, title: 'Interplanetary Communication Technology', votes: 0 },
    { id: 2, title: '3D printing in space', votes: 0 },
    { id: 3, title: 'Interplanetary travel', votes: 0 }
    // Add more options as needed
  ];
  votingOptions3: VotingOption[] = [
    { id: 1, title: 'Cheap satellites for everyone', votes: 0 },
    { id: 2, title: 'Games in space', votes: 0 },
    { id: 3, title: 'Focus on crowdfunding and fundraising', votes: 0 }
    // Add more options as needed
  ];

  votingSubjects: VotingSubject[] = [
    new VotingSubject(1, 'What should be the long term goal?', this.votingOptions1),
    new VotingSubject(1, 'What technology should be focused on right away?', this.votingOptions2),
    new VotingSubject(1, 'What should be the initial moneymaker for the business?', this.votingOptions3)
  ];

  ngOnInit(): void {
    // Set the flag to true when the component initializes
    this.isInitialized = true;
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
    }, 500); // Adjust the delay as needed to match your animation duration
  }

  calculatePercentage(votes: number, totalVotes: number): number {
    return totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  }
  
  getTotalVotes(options: VotingOption[]): number {
    return options.reduce((total, option) => total + option.votes, 0);
  }

  sortedOptions(subject: VotingSubject): VotingOption[] {
    return subject.options.slice().sort((a, b) => b.votes - a.votes);
  }

  trackByOption(index: number, option: VotingOption): number {
    return option.id;
  }
}