import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ChallengesService } from '../challenges.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;
  title = '';
  description = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageRoute: PageRoute,
    private router: RouterExtensions,
    private challengeService: ChallengesService
  ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   console.log(paramMap.get('mode'));
    // }); //this will work with cache means will not reload once it is loaded. 
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('mode')) {
          this.isCreating = true; //is creating new
        } else {
          this.isCreating = paramMap.get('mode') !== 'edit'; //isCreating is false means it is editing
        }

        if(!this.isCreating) { //unit 166
          this.challengeService.currentChallenge.pipe(take(1)).subscribe(challenge => {
            this.title = challenge.title;
            this.description = challenge.description;
          })
        }
      });
    });
  }

  onSubmit(title: string, description: string) { //unit 166
    if(this.isCreating) {
      this.challengeService.createNewChallenge(title, description);
    } else {
      this.challengeService.updateChallenge(title, description);
    }
    this.router.backToPreviousPage();
  }
}
