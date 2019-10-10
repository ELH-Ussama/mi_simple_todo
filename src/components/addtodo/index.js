import React from "react";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addTodoAction } from "../../actions/todo_actions";
import {connect} from 'react-redux';
import './index.css';

class AddTodo extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleAdd = () => {
      if(this.state.text){this.props.dispatch(addTodoAction(this.state.text));
      this.setState({text: ''});}
  }

  render() {
    return (
      <div className="AddTodoContainer">
        <TextField
          className="textField"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.text}
        />
        <span className="AddTodo">
          <Fab className="AddTodo" color="primary" onClick={this.handleAdd}>
            <AddIcon />
          </Fab>
        </span>
      </div>
    );
  }
}


export default connect()(AddTodo)