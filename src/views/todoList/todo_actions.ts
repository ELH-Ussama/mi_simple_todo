export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export enum VisibilityFilters {
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export interface AddTodoActionType {
  type: string,
  text: string,
}

export function addTodoAction(text: string): AddTodoActionType {
  return {
    text,
    type: ADD_TODO,
  };
}

export function toggleTodoAction(todoId: number) {
  return {
    id: todoId,
    type: TOGGLE_TODO,
  };
}

export function deleteTodoAction(todoId: number) {
  return {
    id: todoId,
    type: DELETE_TODO,
  };
}

export function setVisibilityFilterAction(visibilityFilter: VisibilityFilters) {
  return {
    visibilityFilter,
    type: SET_VISIBILITY_FILTER,
  };
}
