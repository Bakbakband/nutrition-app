import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

// Initial state
const initialState: State = {
    token: null,
    authenticated: false
};


export function authReducer(state= initialState, action: AuthActions.AuthActions) {
    switch(action.type){

        // Combining sign-up and sign-in by benefitting from fall-through mechanisms in switch case statements
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
        return {
            ...state, 
            authenticated: true
        };

        case (AuthActions.LOGOUT):
        return {
            ...state,
            token: null,
            authenticated: false
        };

        case (AuthActions.SET_TOKEN):
        return {
            ...state,
            token: action.payload
        };

        default:
            return state;
    }
}
