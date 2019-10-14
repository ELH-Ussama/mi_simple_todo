import React from "react";
import { useDispatch } from "react-redux";
import {
  setVisibilityFilterAction,
  VisibilityFilters
} from "../../actions/todo_actions";
import { ButtonGroup, Button } from "@material-ui/core";
import { TodoListWording } from "../constants";
import "./filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const handleClick = filter => {
    dispatch(setVisibilityFilterAction(filter));
  };
  return (
    <div className="FilterContainer">
      <ButtonGroup fullWidth aria-label="full width outlined button group">
        <Button onClick={() => handleClick(VisibilityFilters.SHOW_ACTIVE)}>
          {TodoListWording.unchecked}
        </Button>
        <Button onClick={() => handleClick(VisibilityFilters.SHOW_ALL)}>
          {TodoListWording.all}
        </Button>
        <Button onClick={() => handleClick(VisibilityFilters.SHOW_COMPLETED)}>
          {TodoListWording.checked}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filter;
