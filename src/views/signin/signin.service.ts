
// actions
export const VALIDATE_AND_SIGN_IN = 'VALIDATE_AND_SIGN_IN';

export interface IValidateAndSignInAction {
  password: string,
  userNameOrEmail: string,
  type: string,
}

export function validateAndSignInAction(userNameOrEmail: string, password: string): IValidateAndSignInAction{
  return {
    password,
    userNameOrEmail,
    type: VALIDATE_AND_SIGN_IN,
  }
}