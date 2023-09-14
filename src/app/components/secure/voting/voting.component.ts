import { Component } from '@angular/core';
import { VotingSubject } from 'src/app/classes/VotingSubject';
import { VotingOption } from 'src/app/classes/VotingOption';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {
  // Define an array of voting options with initial vote counts
  votingOptions1: VotingOption[] = [
    { id: 1, title: 'Option A', votes: 0 },
    { id: 2, title: 'Option B', votes: 0 },
    { id: 3, title: 'Option C', votes: 0 }
    // Add more options as needed
  ];
  votingOptions2: VotingOption[] = [
    { id: 1, title: 'Option A', votes: 0 },
    { id: 2, title: 'Option B', votes: 0 },
    { id: 3, title: 'Option C', votes: 0 }
    // Add more options as needed
  ];
  votingOptions3: VotingOption[] = [
    { id: 1, title: 'Option A', votes: 0 },
    { id: 2, title: 'Option B', votes: 0 },
    { id: 3, title: 'Option C', votes: 0 }
    // Add more options as needed
  ];

  votingSubjects: VotingSubject[] = [
    new VotingSubject(1, 'Subject A', this.votingOptions1),
    new VotingSubject(1, 'Subject B', this.votingOptions2),
    new VotingSubject(1, 'Subject C', this.votingOptions3)
  ];

  // Method to handle user voting
  vote(subject: VotingSubject, option: VotingOption) {
    // Find the subject in the array and increment the vote count for the selected option
    const selectedSubject = this.votingSubjects.find(s => s.id === subject.id);
    if (selectedSubject) {
      const selectedOption = selectedSubject.options.find(o => o.id === option.id);
      if (selectedOption) {
        selectedOption.votes++;
      }
    }
  }
}