import React from "react";
import Todo from "../todo";
import {
  VisibilityFilters,
  toggleTodoAction
} from "../../actions/todo_actions";
import { connect } from "react-redux";
import "./index.css";

const showFilter = (todo, visibilityFilter) => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (todo.completed && visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    return true;
  if (!todo.completed && visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
    return true;
  return false;
};

class VisibleTodos extends React.Component {
  handleToggle = i => {
    this.props.dispatch(toggleTodoAction(i));
  };
  render() {
    const { todos, visibilityFilter } = this.props;
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
                toggleTodo={this.handleToggle}
                completed={todo.completed}
              ></Todo>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(VisibleTodos);
