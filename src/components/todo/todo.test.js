import Todo from "./index";
import { mount } from "enzyme";
import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";

const handleToggle = jest.fn();
const handleDelete = jest.fn();

describe("todo tests", () => {
  it("should render corectly when completed is true", () => {
    const myTodo = mount(<Todo completed={true}/>);
    expect(myTodo).toMatchSnapshot();
    myTodo.unmount();
  });

  it("should render corectly when completed is false", () => {
    const myTodo = mount(<Todo completed={false}/>);
    expect(myTodo).toMatchSnapshot();
    myTodo.unmount();
  });

  it("should call appropriate functions", () => {
    const myTodo = mount(
      <Todo
        id={666}
        text={'test should call appropriate functions text'}
        toggleTodo={handleToggle}
        deleteTodo={handleDelete}
        completed={true}
      />
    );
    expect(myTodo).toMatchSnapshot();
    const todoCheck = myTodo.find(Checkbox);
    expect(todoCheck).toHaveLength(1);
    todoCheck.simulate('click');
    expect(handleToggle).toHaveBeenCalled();
    const todoDel = myTodo.find(IconButton).last();
    expect(todoDel).toHaveLength(1);
    todoDel.simulate('click');
    expect(handleDelete).toHaveBeenCalled();
  });
});
