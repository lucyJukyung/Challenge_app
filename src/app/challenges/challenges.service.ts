import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { take, tap, switchMap } from 'rxjs/operators';

import { Challenge } from './challenges.model';
import { DayStatus, Day } from './day.model';
import { AuthService } from '../auth/auth.service';

@Injectable ({ providedIn: 'root' }) //make it available throughtout the app
export class ChallengesService implements OnDestroy {
    private _currentChallenge = new BehaviorSubject<Challenge>(null); //unit 151
    private userSub: Subscription;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.userSub = this.authService.user.subscribe(user => { //unit 194
            if(!user) {
                this._currentChallenge.next(null);
            }
        });
    }

    get currentChallenge() {
        return this._currentChallenge.asObservable(); //unit 153
    }

    fetchCurrentChallenge() { //unit 173
        return this.authService.user.pipe( //unit 186
            take(1), //only get the latest value and automatically unsubscribe
            switchMap(currentUser => {
                if(!currentUser || !currentUser.isAuth) {
                    return of(null); //if user non exist or is not auth then finish the function
                }
                return this.http.get<{
                    title: string;
                    description: string;
                    month: number;
                    year: number;
                    _days: Day[];
                }>(`https://ns-ng-course-399ad.firebaseio.com/challenge/${currentUser.id}.json?auth=${currentUser.token}`);
            }),
            tap(resData => {
                if(resData) {
                    const loadedChallenge = new Challenge(
                        resData.title, 
                        resData.description, 
                        resData.year, 
                        resData.month, 
                        resData._days
                    );
                this._currentChallenge.next(loadedChallenge);
                }
            })
        );
    }

    createNewChallenge(title: string, description: string) {
        const newChallenge = new Challenge(title, description, new Date().getFullYear(), new Date().getMonth());

        //save it to server /unit 172
        this.saveToServer(newChallenge);

        this._currentChallenge.next(newChallenge);
    }

    updateChallenge(title: string, description: string) { //unit 166
        this._currentChallenge.pipe(take(1)).subscribe(challenge => {
            const updatedChallenge = new Challenge(title, description, challenge.year, challenge.month, challenge.days);
            //send to a server
            this.saveToServer(updatedChallenge);
            this._currentChallenge.next(updatedChallenge);
        })
    }

    updateDayStatus(dayInMonth: number, status: DayStatus) {
        this._currentChallenge.pipe(take(1)).subscribe(challenge => {
            if(!challenge || challenge.days.length < dayInMonth) {
                return; //unit 157: check the challenge has less days element than dayInMonth (it shouldn't have 30 days in Feb).
                //if challenge is empty OR invalid number of days the function will stop.
            }
            const dayIndex = challenge.days.findIndex(
                d => d.dayInMonth === dayInMonth
            );
            challenge.days[dayIndex].status = status;
            this._currentChallenge.next(challenge);
            //save this to a server
            this.saveToServer(challenge);
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    private saveToServer(challenge: Challenge) { 
        this.authService.user.pipe(
            take(1),
            switchMap(currentUser => {
                if(!currentUser || !currentUser.isAuth) {
                    return of(null); //if user non exist or is not auth then finish the function
                }
                return this.http.put(`https://ns-ng-course-399ad.firebaseio.com/challenge/${currentUser.id}.json?auth=${currentUser.token}`, challenge);
            })
            ).subscribe(res => {
                console.log(res);
            });
    }
}