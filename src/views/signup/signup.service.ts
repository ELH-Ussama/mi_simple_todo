import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// actions
export const VALIDATE_AND_SIGNUP = 'VALIDATE_AND_SIGNUP';

export interface ValidateAndSignUpActionType {
  type: string,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
}

export function validateAndSignUpAction(firstName: string, lastName: string, userName: string, email: string, password: string): ValidateAndSignUpActionType {
  return {
    firstName,
    lastName,
    userName,
    email,
    password,
    type: VALIDATE_AND_SIGNUP,
  };
}

function* validateAndSignUp(action: ValidateAndSignUpActionType){
  yield axios.post('http://localhost:8000/createUser', {action})
}

export function* signUpSaga(){
  yield takeLatest(VALIDATE_AND_SIGNUP, validateAndSignUp)
}

export const signUpSagas = [
  signUpSaga,
];