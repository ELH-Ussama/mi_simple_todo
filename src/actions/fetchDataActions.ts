export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
export const UPDATE_TODOS_STATE = 'UPDATE_TODOS_STATE';

export function fetchAllDataAction() {
  return {type: FETCH_ALL_DATA}
}

export function updateTodosState(data: any) {
  return {
    todos: data,
    type: UPDATE_TODOS_STATE,
  }
}