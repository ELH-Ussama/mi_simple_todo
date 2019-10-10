export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export function addTodoAction(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodoAction(todoId) {
  return {
    type: TOGGLE_TODO,
    id: todoId
  };
}

export function deleteTodoAction(todoId) {
  return {
    type: DELETE_TODO,
    id: todoId
  };
}

export function setVisibilityFilterAction(visibilityFilter) {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter
  };
}


