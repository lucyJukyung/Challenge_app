import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChallengesService } from '../challenges.service';
import { Day, DayStatus } from '../day.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  private curChallengeSub: Subscription;

  constructor(private challengeService: ChallengesService) { }

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge => {
      if(challenge) {
        this.currentDay = challenge.currentDay;
      }
    });
  }

  onActionSelected(action: DayStatus) {
    this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
    console.log(action);
  }

  getActionName() {
    if(this.currentDay.status === DayStatus.Completed) {
      return 'complete';
    }
    if(this.currentDay.status === DayStatus.Failed) {
      return 'fail';
    }
    return null;
  }

  ngOnDestroy() {
    if(this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
