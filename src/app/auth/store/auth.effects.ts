import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';

import * as AuthActions from './auth.actions';

// To inject Actions (dealing with async effects that then lead to the sync state changes)
@Injectable()
export class AuthEffects {

    // Registers authSignUp in "ngrx/effect world"
    // ngrx will watch property based on conditions
    @Effect() // expects observable returned
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP) // Check for action type to handle effect
        .map((action:AuthActions.TrySignup) => { // Extract payload of action and return observable
            return action.payload; // map operator wraps payload into observable
        })
        .switchMap((authData: {username: string, password: string}) => { // Reaching out to firebase & turn firebase promise into observable
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap( () =>  { // Set user to signup and get token
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap( (token: string) => { // mergeMap allows to merge multiple observables into one
            return [ // emit multiple events, returned in array as observable
                { 
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action:AuthActions.TrySignup) => { // Extract payload of action and return observable
            return action.payload; // map operator wraps payload into observable
        })
        .switchMap((authData: {username: string, password: string}) => { // Reaching out to firebase & turn firebase promise into observable
            return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap( () =>  { // Set user to signup and get token
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap( (token: string) => { // mergeMap allows to merge multiple observables into one
            this.router.navigate(['/']);
            return [ // emit multiple events, returned in array as observable
                { 
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect({dispatch:false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(
            () => {
                this.router.navigate(['/']);
            }
        );

    // $ signifies it's an observable
    // actions refers to all the actions we have in our application
    constructor(private actions$: Actions, private router: Router) {}
}