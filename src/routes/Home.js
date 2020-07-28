import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import "./Home.css";
import MainList from "./MainList";
import FoodPage from "./FoodPage";
import { Layout, Menu, Breadcrumb, Typography, Avatar, Input} from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


var foodlist = []

class Home extends Component{
    state = { 
        foods: [],
        foodpage: false
    }
    componentWillMount(){
        
    }
    componentDidMount(){
      if(this.props.location.pathname.includes('food')){
        console.log("food page!");
        this.setState({foodpage:true});
      }

    }
        
    render(){
        console.log("render in!");
        //console.log(match.params.name);
        if(this.state.foodpage){
          console.log("this props", this.props);
          return (
            <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Link to={'/'}>
                  <div className="logo" id="logodiv">
                  </div>
                </Link>
                
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{'display':'inline-block', 'vertical-align': 'top'}}>
                  <Menu.Item key="1" style={{'padding-left':10, 'padding-right':10}}>Discover</Menu.Item>
                  <Menu.Item key="2" style={{'padding-left':10, 'padding-right':10}}>My Menu</Menu.Item>
                  <Menu.Item key="3" style={{'padding-left':10, 'padding-right':10}}>nav 3</Menu.Item>
                </Menu>
                <Search id="searchbox"
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  style={{ width: 200, 'float':'right', 'vertical-align':'middle'}}
                />
              </Header>
  
              <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                
                <FoodPage title={this.props.location.pathname.split('/food/')[1].replace(/_/g," ")}/>
  
              </Content>
              <Footer style={{ textAlign: 'center' }}>KAIST ?2020 Created by Youngjae Jang and Hongseok Kang</Footer>
            </Layout>
          );
        }

        return (
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" id="logodiv">
              </div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{'display':'inline-block', 'vertical-align': 'top'}}>
                <Menu.Item key="1" style={{'padding-left':10, 'padding-right':10}}>Discover</Menu.Item>
                <Menu.Item key="2" style={{'padding-left':10, 'padding-right':10}}>My Menu</Menu.Item>
                <Menu.Item key="3" style={{'padding-left':10, 'padding-right':10}}>nav 3</Menu.Item>
              </Menu>
              <Search id="searchbox"
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200, 'float':'right', 'vertical-align':'middle'}}
              />
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              
              <MainList/>

            </Content>
            <Footer style={{ textAlign: 'center' }}>KAIST ?2020 Created by Youngjae Jang and Hongseok Kang</Footer>
          </Layout>
        );
    }
    
}
export default Home;