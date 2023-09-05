import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  communityMembers = 4567; // Replace with your actual number
  countingNumber = "";

  constructor(private el: ElementRef) {}

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
          }, 50); // Adjust interval as needed
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
