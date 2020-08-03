import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenges.model';
import { Subscription } from 'rxjs';
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: [
    './_current-challenge.component.common.scss',
    // './current-challenge.component.css'
  ],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  currentChallenge: Challenge;
  private curChallengeSub: Subscription;

  constructor(
    private modalDialog: ModalDialogService, 
    private vcRef: ViewContainerRef, 
    private uiService: UIService,
    private challengeService: ChallengesService
  ) {}

  ngOnInit() {
    // unit 154
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge => {
      this.currentChallenge = challenge;
    });
  }

  getIsSettable(dayInMonth: number) {
    return dayInMonth <= new Date().getDate();
  }

  getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 1;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    ).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }


  onChangeStatus(day: Day) {
    if(!this.getIsSettable(day.dayInMonth)) {
      return; //if get date is not settable (future dates) this doesn't open the modal
    }
    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true, 
      viewContainerRef: 
        this.uiService.getRootVCRef() 
        ? this.uiService.getRootVCRef()  //check if getRootVCRef exist,
        : this.vcRef, //use it if it does, if not just use vcRef property
        context: { date: day.date, status: day.status }
    }).then((status: DayStatus) => {
      if(status === DayStatus.Open) { //this if allows user to close the modal without resetting the completion value
        return;
      }
      this.challengeService.updateDayStatus(day.dayInMonth, status);
      console.log(status);
    });
  }

  ngOnDestroy() {
    if(this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
