import {
  ADD_TODO,
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  DELETE_TODO,
} from "../actions/todo_actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

function todoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        text: action.text,
        completed: false,
      };
      const newTodos = [...state.todos, newTodo];
      return {
        visibilityFilter: state.visibilityFilter,
        todos: newTodos,
      };
    case TOGGLE_TODO:
      const NewTodos = state.todos.map((todo: any, index: number) => {
        return action.id === index
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return {
        ...state,
        todos: NewTodos,
      };
    case SET_VISIBILITY_FILTER:
      return {
        visibilityFilter: action.visibilityFilter,
        todos: state.todos,
      };
    case DELETE_TODO:
      return {
        visibilityFilter: state.visibilityFilter,
        todos: state.todos.filter((todo: any, index: number) => index!==action.id),
      };
    default:
      return state;
  }
}

export default todoReducer;
