import { AnyAction } from "redux";
import { UserData } from "../../firebase/firebase.utils";
import { signInSuccess, signOutSuccess, signInFail, signOutFail, signUpFail } from "./user.actions";

export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null,
};

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if(signInSuccess.match(action)) {
      return { ...state, currentUser: action.payload };
    };

    if(signOutSuccess.match(action)) {
      return { ...state, currentUser: null };
    };

    if(signInFail.match(action) || signOutFail.match(action) || signUpFail.match(action)) {
      return { ...state, error: action.payload };
    };

    return state;
};