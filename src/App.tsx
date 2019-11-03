import React from "react";
import TodoList from "./views/todoList/todolist";
import "./App.css";
import { fetchAllDataAction } from './appActions/fetchDataActions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(): void {
    // @ts-ignore
    this.props.dispatch(fetchAllDataAction());
  }

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default connect()(App);
