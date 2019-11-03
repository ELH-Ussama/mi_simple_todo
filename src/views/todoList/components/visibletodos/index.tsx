import React from 'react';
import Todo from '../todo';
import {
  VisibilityFilters,
  toggleTodoAction,
  deleteTodoAction,
} from '../../todo_actions';
import { useDispatch, useSelector } from 'react-redux';
import './visibletodos.css';

const showFilter = (todo: any, visibilityFilter: any) => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (todo.completed && visibilityFilter === VisibilityFilters.SHOW_COMPLETED) {
    return true;
  }
  return !!(!todo.completed && visibilityFilter === VisibilityFilters.SHOW_ACTIVE);
};

const VisibleTodos = () => {
  const dispatch = useDispatch();
  const handleToggle = (i: number) => {
    dispatch(toggleTodoAction(i));
  };
  const handleDelete = (i: number) => {
    dispatch(deleteTodoAction(i));
  };
  // TODO add state typing
  const { todos, visibilityFilter } = useSelector((state: any) => state);
  return (
    <div className="VisibleTodosContainer">
      {todos
        .filter((todo: any) => showFilter(todo, visibilityFilter))
        .map((todo: any, index: number) => {
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
