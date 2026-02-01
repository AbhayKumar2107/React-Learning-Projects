// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";

class Hero extends Component{
    render(){
        return(
            <div className="hero-section">
                <p className="name">Name: Abhay Kumar Patel</p>
                <p>Email: abhaykumarpatel@gmail.com</p>
                <p>Phone: 4854983409</p>
                <p>Address: ABC, xyz street</p>
            </div>
        )
    };
};

export {Hero};