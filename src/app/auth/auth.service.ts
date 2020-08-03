import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";
import { setString, getString, hasKey, remove } from 'tns-core-modules/application-settings';

import { User } from "./user.model";
import { ChallengesService } from "../challenges/challenges.service";


const FIREBASE_API_KEY = 'AIzaSyA1Wpt2UVtoLPniMVRPJvR4JLevSI5FHao';

interface AuthResponseData { //unit 184
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string; //this field is optional
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _user = new BehaviorSubject<User>(null); //unit 185
    private tokenExpirationTimer: number

    constructor(private http: HttpClient, private router: RouterExtensions) {}

    get user() {
        return this._user.asObservable(); //asObsaverable so we can only listen to it only outside. 
    }

    signUp(email: string, password: string) {
        return this.http
        .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        {email: email, password: password, returnSecureToken: true}
        ).pipe(
            catchError(errorRes => {
            this.handleError(errorRes.error.error.message);
            return throwError(errorRes);
        }),
        tap(resData => { //unit 184
            if(resData && resData.idToken) {
                this.handleLogin(
                    email,
                    resData.idToken, //token
                    resData.localId, //userid
                    parseInt(resData.expiresIn) //parse to int from string
                );
            }
        })
        );
    }

    login(email: string, password: string) {
        return this.http
        .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {email: email, password: password, returnSecureToken: true}
        ).pipe(
            catchError(errorRes => {
            this.handleError(errorRes.error.error.message);
            return throwError(errorRes);
        }),
        tap(resData => { //unit 184
            if(resData && resData.idToken) {
                this.handleLogin(
                    email,
                    resData.idToken, //token
                    resData.localId, //userid
                    parseInt(resData.expiresIn) //parse to int from string
                );
            }
        })
        );
    }

    //Now login & signup handle goes to Challenge Service to view the section protected by a token.

    logout() { //unit 188
        this._user.next(null);
        remove('userData');
        if(this.tokenExpirationTimer) { //unit 191
            clearTimeout(this.tokenExpirationTimer);
        }
        this.router.navigate(['/auth'], {clearHistory: true});
    }

    autoLogin() { //unit 190
        if(!hasKey('userData')) {
            return of(false);
        }
        const userData: {
            email: string;
            id: string;
            _token: string; 
            _tokenExpirationDate: string;
        } = JSON.parse(getString('userData')); //deconstruct 'userData'

        const loadedUser = new User(
            userData.email, 
            userData.id, 
            userData._token, 
            new Date(userData._tokenExpirationDate)
        );

        if(loadedUser.isAuth) {
            this._user.next(loadedUser);
            this.autoLogout(loadedUser.timeToExpiry);
            return of(true);
        }
        return of(false);
    }

    autoLogout(expiryDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => this.logout(), expiryDuration);
    }

    private handleLogin(email: string, token: string, userId: string, expiresIn: number) { //unit 185
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
            email, 
            userId,
            token, 
            expirationDate
        );
        setString('userData', JSON.stringify(user)); //unit 190
        this.autoLogout(user.timeToExpiry);
        this._user.next(user);
    }

    private handleError(errorMessage: string) {
        switch(errorMessage) {
            case 'EMAIL_EXISTS':
                alert('This email exists already!');
                break;
            case 'EMAIL_NOT_FOUND':
                alert('Email is not found!');
                break;
            case 'INVALID_PASSWORD':
                alert('Password is invalid!');
                break;
            default:
                alert('Authentication failed, check your credentials.')
        }
    }
}