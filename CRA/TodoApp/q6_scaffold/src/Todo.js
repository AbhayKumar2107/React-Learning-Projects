import { Component } from "react";

export class Todo extends Component {
  render() {
    const {removeEvent} = this.props;
    const todo = this.props.todo;
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>removeEvent(todo)}>x</button>
      </div>
    );
  }
}
