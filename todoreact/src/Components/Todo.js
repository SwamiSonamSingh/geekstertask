import React from 'react';
import "./Todo.css"
function Todo(props) {
    return (
      <div className="container1">
        <li>
          {props.text}
        </li>
        <button type="button" class="btn btn-danger btn-sm" onClick={() => {props.onCheck(props.id)}}>Delete</button><hr/>
      </div>
    );
}
export default Todo;