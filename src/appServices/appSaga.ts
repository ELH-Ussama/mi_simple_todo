import { getDataSagas } from './getData';
import { signUpSagas } from '../views/signup/signup.service';


export const appSagas = [
  ...getDataSagas,
  ...signUpSagas,
];