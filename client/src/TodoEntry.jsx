import React from "react";

const TodoEntry = (props) => (
  <div>
    <button onClick={() => props.deleteTodo(props.todo.name)}>&#10004;</button>{' '}
    {props.todo.name}
  </div>
)

export default TodoEntry;
