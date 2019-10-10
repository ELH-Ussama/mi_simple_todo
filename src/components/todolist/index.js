import React from "react";
import "./TodoList.css";
import { TodoListWording } from "../constants";
import Header from "../../common/components/header";
import AddTodo from "../addtodo";
import Filter from "../filter";
import VisibleTodos from "../visibletodos";

const TodoList = () => (
  <div className="TodoList">
    <Header>{TodoListWording.mainTitle}</Header>
    <AddTodo />
    <VisibleTodos />
    <Filter />
  </div>
);

export default TodoList;
