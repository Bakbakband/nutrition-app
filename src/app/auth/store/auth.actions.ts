import { Action } from '@ngrx/store';

export  const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signup implements Action {
    readonly type = SIGNUP;
}

export class Signin implements Action {
    readonly type = SIGNIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    // TS shortcut to create object by adding accessor to convert property into payload
    constructor(public payload: string) {}// String since taking in token
}

// Generic type
// pipe symbol in ts is a union type describing a value that can be of several types
export type AuthActions = Signup | Signin | Logout | SetToken;