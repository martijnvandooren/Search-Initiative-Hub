import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VotingSubject } from '../classes/VotingSubject'; // Import your VotingSubject and VotingOption models
import { VotingOption } from '../classes/VotingOption'; // Import your VotingSubject and VotingOption models
import { VotingService } from './get-votings.service'; // Import your VotingService


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private topVotingSubjectsSource = new BehaviorSubject<VotingSubject[]>([]);
  topVotingSubjects$ = this.topVotingSubjectsSource.asObservable();

  constructor(private votingService: VotingService) {
    // Initialize the top voting subjects when the service is constructed
    this.updateTopVotingSubjects();
  }

  setTopVotingSubject(subject: VotingSubject) {
    this.topVotingSubjectsSource.next([subject]);
  }

  private updateTopVotingSubjects() {
    // Get the example subjects from the VotingService
    const exampleSubjects = this.votingService.getExampleSubjects();

    // Sort the subjects based on the most voted voting options
    const sortedSubjects = exampleSubjects.sort((a, b) =>
      this.getMostVotedOption(b).votes - this.getMostVotedOption(a).votes
    );

    // Take the top three subjects
    const topThreeSubjects = sortedSubjects.slice(0, 3);

    // Update the BehaviorSubject with the top three subjects
    this.topVotingSubjectsSource.next(topThreeSubjects);
  }

  // Public method to get the most voted voting option for a subject
  getMostVotedOption(subject: VotingSubject): VotingOption {
    return subject.options.reduce((mostVoted, option) =>
      option.votes > mostVoted.votes ? option : mostVoted
    );
  }

  getMostVotedOptionVotes(subject: VotingSubject): number {
    return this.getMostVotedOption(subject).votes;
  }
}