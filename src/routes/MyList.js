import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import Navigation from "../components/Navigation";
import { Layout, Input} from 'antd';
import { Button, Icon, Loader, Dimmer} from 'semantic-ui-react'
import Login from "./Login"
const { Header, Content, Footer } = Layout;
const { Search } = Input;


var foodlist = []

class MyList extends Component{
    state = { 
        foods: [],
        loading: true
    }
    
    componentWillMount(){
        fetch('http://192.249.19.243:0280/main/get_recipes')
            .then(res => res.json())
            .then(data => foodlist=data)
            .then(
                () => console.log("f:",foodlist),
            )
            .then(
                () => {
                    this.setState({foods: foodlist.map(item => ({title:item, img:"http://192.249.19.243:0280/main/image/"+item}))});
                }
            )
            .then(()=>this.setState({loading: false}))
            .then(console.log("Mainlist items loaded!"));
    }
    componentDidMount(){
        console.log("finished");
    }
        
    render(){
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <p>Mylist</p>
                <Login/>
           </div>
        );
    }
}
export default MyList;