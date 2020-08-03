import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeActionsModule } from './challenge-actions/challenge-actions.module';

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent
    ],
    imports: [
        NativeScriptCommonModule, //need this for use of *ngIf etc.
        ChallengesRoutingModule,
        SharedModule,
        ChallengeActionsModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule {}