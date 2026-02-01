// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
import { Component } from "react";

class Skill extends Component{
    render(){
        return(
            <div className="skill-section">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </div>
        )
    }
}

export {Skill};