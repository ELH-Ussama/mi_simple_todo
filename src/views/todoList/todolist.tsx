import React from "react";
import "./todolist.css";
import { TodoListWording } from "./components/constants";
import Header from "../../common/components/header";
import AddTodo from "./components/addtodo";
import Filter from "./components/filter";
import VisibleTodos from "./components/visibletodos";

const TodoList = () => (
  <div className="TodoList">
    <Header>{TodoListWording.mainTitle}</Header>
    <AddTodo />
    <VisibleTodos />
    <Filter />
  </div>
);

export default TodoList;
