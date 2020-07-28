import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import Navigation from "../components/Navigation";
import { Layout, Input} from 'antd';
import { Button, Icon, Loader, Dimmer} from 'semantic-ui-react'
const { Header, Content, Footer } = Layout;
const { Search } = Input;


var foodlist = []

class MainList extends Component{
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
            .then(()=>this.setState({loading: false}));
    }
    componentDidMount(){

    }
        
    render(){
        console.log("Main List render in!");
        if(this.state.loading){
            return(
              <Dimmer active inline='centered' id="loadingAnim" active={this.state.loading}>
                      <Loader size='big'>Loading</Loader>
              </Dimmer>
            );
          }
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <ul class="foodlist">
                  {
                      console.log(this.state.foods),
                      this.state.foods.length!=0 ?
                      this.state.foods.map(item=>
                          <Item
                              title={item.title} 
                              img={item.img}/>
                          )
                          :
                          <p id="loadingMsg">Data Loading...</p>
                  }
              </ul>
           </div>
        );
    }
}
export default MainList;