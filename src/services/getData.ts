import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_ALL_DATA, updateTodosState } from '../actions/fetchDataActions';
import axios from 'axios';


function* getData() {
  const data: any[] = yield axios.get('http://localhost:8000/getData')
    .then(res => {
      if (res.data.success) {
        return res.data.data;
      }
    });
  yield put(updateTodosState(data));
}

export function* getDataSaga() {
  yield takeLatest(FETCH_ALL_DATA, getData);
}
