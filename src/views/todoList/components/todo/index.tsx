import React from "react";
import "./todo.css";
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

// TODO add prop typing
const Todo = (props: any) => {
  return (
    <div className="Todo">
      <ListItem>
        <Checkbox
          checked={props.completed}
          onClick={() => {
            props.toggleTodo(props.id);
          }}
          value="checkedB"
          color="primary"
        />
        <ListItemText primary={props.text} />
        <IconButton onClick={() => {
          props.deleteTodo(props.id)
        }}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
};

export default Todo;
