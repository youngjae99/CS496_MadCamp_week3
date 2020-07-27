import React, {Component} from "react"

class Menu extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}
export default Menu;