import React from "react";
import Todo from "../todo";
import {
  VisibilityFilters,
  toggleTodoAction,
  deleteTodoAction
} from "../../actions/todo_actions";
import { useDispatch, useSelector } from "react-redux";
import "./visibletodos.css";

const showFilter = (todo, visibilityFilter) => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (todo.completed && visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    return true;
  if (!todo.completed && visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
    return true;
  return false;
};

const VisibleTodos = () => {
  const dispatch = useDispatch();
  const handleToggle = i => {
    dispatch(toggleTodoAction(i));
  };
  const handleDelete = i => {
    dispatch(deleteTodoAction(i));
  };

  const { todos, visibilityFilter } = useSelector(state => state);
  return (
    <div className="VisibleTodosContainer">
      {todos
        .filter(todo => showFilter(todo, visibilityFilter))
        .map((todo, index) => {
          return (
            <Todo
              key={index}
              id={index}
              text={todo.text}
              toggleTodo={handleToggle}
              deleteTodo={handleDelete}
              completed={todo.completed}
            />
          );
        })}
    </div>
  );
};

export default VisibleTodos;
