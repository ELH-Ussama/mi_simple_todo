import React from "react";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addTodoAction } from "../../actions/todo_actions";
import { connect } from "react-redux";
import "./addtodo.css";

class AddTodo extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event: any) => {
    this.setState({ text: event.target.value });
  };

  handleAdd = () => {
    if (this.state.text) {
      // @ts-ignore
      this.props.dispatch(addTodoAction(this.state.text));
      this.setState({ text: "" });
    }
    // @ts-ignore
    document.getElementById("AddTodoTextField").focus();
  };

  handleTextFieldKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      this.handleAdd();
    }
  };

  componentDidMount(){
    // @ts-ignore
    document.getElementById("AddTodoTextField").focus();
  }

  render() {
    return (
      <div className="AddTodoContainer">
        <TextField
          id="AddTodoTextField"
          className="textField"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.text}
          onKeyDown={this.handleTextFieldKeyDown}
        />
        <span className="AddTodo">
          <Fab
            className="AddTodo"
            color="primary"
            onClick={this.handleAdd}
          >
            <AddIcon />
          </Fab>
        </span>
      </div>
    );
  }
}

export default connect()(AddTodo);
