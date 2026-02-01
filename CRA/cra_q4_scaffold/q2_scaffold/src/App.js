import "./styles.css";
import { Component } from "react";
import { Hero } from "./Hero";
import { Skill } from "./Skills";
import { About } from "./About";
// Use Hero, Skills and About component to display your information
class App extends Component {
  render() {
    return (
      <>
      <Hero /> 
      <Skill /> 
      <About /> 
      </>

    )}
}
export default App