import React from "react";
import TodoList from "./components/todolist";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;