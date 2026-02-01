import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      theme: "light", 
      class: "light", 
      text: "Dark Theme" 
    };
  }

  changeTheme = () => {
    if (this.state.theme === "light") {
      this.setState({
        theme: "dark",
        class: "dark",
        text: "Light Theme"
      });
    } else if (this.state.theme === "dark") {
      this.setState({
        theme: "light",
        class: "light",
        text: "Dark Theme"
      });
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <button onClick={() => this.changeTheme()}>{this.state.text}</button>
        <h2>Why We Explore - NASA</h2>
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1671686299/launch-pad-67650_1920_p6izup.jpg"
          alt="space shuttle"
        />
        <p>
          Humans are driven to explore the unknown, discover new worlds, push
          the boundaries of our scientific and technical limits, and then push
          further. The intangible desire to explore and challenge the boundaries
          of what we know and where we have been has provided benefits to our
          society for centuries.
        </p>
      </div>
    );
  }
}

export default App;
