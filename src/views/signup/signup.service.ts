import { takeLatest } from 'redux-saga/effects';
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

function validateInputs(action: ValidateAndSignUpActionType) {
  // TODO validate inputs
  console.log('no validation on client side for now');
}

function* validateAndSignUp(action: ValidateAndSignUpActionType) {
  validateInputs(action);
  const result = yield axios.post('http://localhost:8000/createUser', { action });
  const response = result.data;
  if(!response) alert('did not receive any response from server');
  if(!response.success) alert(`Received the flowing error ${response.error}`);
  // TODO dispatch some action because success is true
  // TODO dispatch redirection to signIn
}

export function* signUpSaga() {
  yield takeLatest(VALIDATE_AND_SIGNUP, validateAndSignUp);
}

export const signUpSagas = [
  signUpSaga,
];