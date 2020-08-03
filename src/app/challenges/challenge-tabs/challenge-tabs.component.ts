import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';

import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
  moduleId: module.id
})
export class ChallengeTabsComponent implements OnInit {
  // isLoading = false;

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page,
    private challengeService: ChallengesService
  ) {}

  ngOnInit() { //unit 173
    // this.isLoading = true;
    this.challengeService.fetchCurrentChallenge().subscribe(
      res => {
        console.log('Fetched challenge...');
        // this.isLoading = false;
        this.loadTabRoutes();
      },
      err => {
        console.log(err);
        // this.isLoading = false;
        this.loadTabRoutes();
      }
    );

    this.page.actionBarHidden = true;
  }

  private loadTabRoutes() { //unit 173 
    this.router.navigate(
      [
        {
          outlets: {
            currentChallenge: ['current-challenge'],
            today: ['today']
          }
        }
      ],
      {
        relativeTo: this.active
      }
    );
    // setTimeout(() => { //it makes a bit of delay to get the fetch the data so the UI won't break.
    // }, 10); //removed isLoading animation function due to a bug in ios. don't know why
  }

}
