import { Injectable } from '@angular/core';
import { VotingSubject } from '../classes/VotingSubject';
import { VotingOption } from '../classes/VotingOption';

@Injectable({
  providedIn: 'root',
})
export class VotingService {

  private votingOptions1: VotingOption[] = [
    { id: 1, title: 'A communication network for all the planets', smallTitle: 'comms network', votes: 2 },
    { id: 2, title: 'Design buildings on mars', smallTitle: 'planet habs', votes: 9 },
    { id: 3, title: 'Setup manufacturing in space', smallTitle: 'space manufacturing', votes: 5 }
    // Add more options as needed
  ];
  private votingOptions2: VotingOption[] = [
    { id: 1, title: 'Interplanetary Communication Technology', smallTitle: 'planet communication', votes: 14 },
    { id: 2, title: '3D printing in space', smallTitle: 'spaceprinting', votes: 3 },
    { id: 3, title: 'Interplanetary travel', smallTitle: 'planet travel', votes: 12 }
    // Add more options as needed
  ];
  private votingOptions3: VotingOption[] = [
    { id: 1, title: 'Cheap satellites for everyone', smallTitle: 'cheap satellites', votes: 6 },
    { id: 2, title: 'Games in space', smallTitle: 'spacegames', votes: 26 },
    { id: 3, title: 'Focus on crowdfunding and fundraising', smallTitle: 'crowdfunding', votes: 3 }
    // Add more options as needed
  ];

  private exampleSubjects: VotingSubject[] = [
    new VotingSubject(1, 'What should be the long term goal?', 'long term goal','blablabla', this.votingOptions1),
    new VotingSubject(1, 'What technology should be focused on right away?', 'technology focus','blablabla', this.votingOptions2),
    new VotingSubject(1, 'What should be the initial moneymaker for the business?', 'initial moneymaker','blablabla', this.votingOptions3)
  ];

  // Get example voting subjects
  getExampleSubjects(): VotingSubject[] {
    return this.exampleSubjects;
  }

  getTotalVotesOfSubject(subjectId: number): number {
    return this.exampleSubjects[subjectId].numberOfTotalVotes();
  }

  getHighesVotingOption(subjectId: number) : VotingOption {
    return this.exampleSubjects[subjectId].mostVotedOption()
  }
}