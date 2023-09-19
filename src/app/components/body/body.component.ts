import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { VotingSubject } from 'src/app/classes/VotingSubject';
import { VotingOption } from 'src/app/classes/VotingOption';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  topVotingSubjects: VotingSubject[] = [];

  communityMembers = 20538; // Replace with your actual number
  countingNumber = "";

  constructor(private el: ElementRef, private sharedService: SharedService) {}

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let currentNumber = 0;
          const increment = Math.ceil(this.communityMembers / 100); // Adjust as needed

          const countInterval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= this.communityMembers) {
              clearInterval(countInterval);
              currentNumber = this.communityMembers;
            }
            this.countingNumber = currentNumber.toString();
            if (currentNumber > 1000) {
              this.countingNumber = Math.floor(currentNumber / 1000).toString() + " K"; // Convert to "1k"
            }
          }, 10); // Adjust interval as needed
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);

    // Subscribe to the topVotingSubjects$ observable
    this.sharedService.topVotingSubjects$.subscribe((subjects) => {
      this.topVotingSubjects = subjects;
    });
  }

  // Public method to get the most voted option title for a subject
  getMostVotedOptionTitle(subject: VotingSubject): string {
    return subject.mostVotedOption().smallTitle;
  }

  getMostVotedOptionVotes(subject: VotingSubject): number {
    return subject.mostVotedOption().votes;
  }

  calculatePercentageMostVotedOption(subject : VotingSubject) { 
    return this.calculatePercentage(subject, subject.mostVotedOption().id);
  }

  calculatePercentage(subject:VotingSubject, optionsId : number) : number {
    const totalvotes = subject.numberOfTotalVotes();
    const votes = subject.options[optionsId].votes;
    return Math.floor(totalvotes > 0 ? (votes / totalvotes) * 100 : 0);
  }
}
