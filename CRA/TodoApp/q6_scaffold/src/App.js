import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (text) => {
    this.setState(prevState => ({
      todos: [{ text }, ...prevState.todos]
    }));
  };

  handleRemove = (todo) => {
    console.log(todo);
    this.setState((prevState) => ({
      todos: prevState.todos.filter(t => t !== todo)
    }));
  };


  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form addEvent={this.handleAdd} />
        <List todo={todos}
          removeEvent={this.handleRemove}
        />
      </div>
    );
  }
}
