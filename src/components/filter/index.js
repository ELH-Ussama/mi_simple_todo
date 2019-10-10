import React from "react";
import { connect } from "react-redux";
import {
  setVisibilityFilterAction,
  VisibilityFilters
} from "../../actions/todo_actions";
import { ButtonGroup, Button } from "@material-ui/core";
import { TodoListWording } from "../constants";

class Filter extends React.Component {
  handleClick = filter => {
    this.props.dispatch(setVisibilityFilterAction(filter));
  };
  render() {
    return (
      <div className="FilterContainer">
        <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button
            onClick={() => this.handleClick(VisibilityFilters.SHOW_ACTIVE)}
          >
            {TodoListWording.unchecked}
          </Button>
          <Button onClick={() => this.handleClick(VisibilityFilters.SHOW_ALL)}>
            {TodoListWording.all}
          </Button>
          <Button
            onClick={() => this.handleClick(VisibilityFilters.SHOW_COMPLETED)}
          >
            {TodoListWording.checked}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default connect()(Filter);
