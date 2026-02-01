import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  render() {
    const data = this.props.todo;
    const {removeEvent} = this.props;
    
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {data.map((todo, index)=>(
          <Todo todo={todo} key={index} removeEvent={removeEvent}/>
        ))}
      </div>
    );
  }
}
