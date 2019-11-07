export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
export const UPDATE_TODOS_STATE = 'UPDATE_TODOS_STATE';

// this action is temporary
export interface FetchAllDataAction {
  type: string
}

export function fetchAllDataAction(): FetchAllDataAction {
  return {type: FETCH_ALL_DATA}
}

export function updateTodosState(data: any) {
  return {
    todos: data,
    type: UPDATE_TODOS_STATE,
  }
}