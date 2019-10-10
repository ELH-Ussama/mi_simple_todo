import {
  ADD_TODO,
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from "../actions/todo_actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        text: action.text,
        completed: false
      };
      const newTodos = [...state.todos, newTodo];
      const newState = {
        visibilityFilter: state.visibilityFilter,
        todos: newTodos
      };
      return newState;
    case TOGGLE_TODO:
      const NewTodos = state.todos.map((todo, index) => {
        return action.id === index
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return {
        ...state,
        todos: NewTodos
      };
    case SET_VISIBILITY_FILTER:
      return {
        visibilityFilter: action.visibilityFilter,
        todos: state.todos
      };
    default:
      return state;
  }
}

export default todoReducer;
