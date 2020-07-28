import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import "./Home.css";
import MainList from "./MainList";
import FoodPage from "./FoodPage";
import MyList from "./MyList";
import { Layout, Menu, Breadcrumb, Typography, Avatar, Input, Popover} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Login from './Login';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


const content = (
  <div>
    <Login/>
  </div>
);

class Home extends Component{
    state = { 
        foods: [],
        foodpage: false,
        current: "1",
        login: false
    }
    componentWillMount(){
        
    }
    componentDidMount(){
      if(this.props.location.pathname.includes('food')){
        console.log("food page!");
        this.setState({foodpage:true});
      }
    }
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };
        
    render(){
       const { current } = this.state;
        console.log("render in!");
        //console.log(match.params.name);

        if(current==3){
          return (
            <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Link to={'/'}>
                  <div className="logo" id="logodiv">
                  </div>
                </Link>
                <Menu onClick={this.handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" style={{'display':'inline-block', 'vertical-align': 'top'}}>
                  <Menu.Item key="1" style={{'padding-left':10, 'padding-right':10}}>Discover</Menu.Item>
                  <Menu.Item key="2" style={{'padding-left':10, 'padding-right':10}}>MyList</Menu.Item>
                </Menu>
                <div id="searchbox">
              <Search placeholder="input search text" onSearch={value => console.log(value)}  enterButton />
              </div>
              </Header>
  
              <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                
                <MyList/>
  
              </Content>
              <Footer style={{ textAlign: 'center' }}>KAIST ?2020 Created by Youngjae Jang and Hongseok Kang</Footer>
            </Layout>
          );
        }

        if(this.state.foodpage){
          console.log("this props", this.props);
          return (
            <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Link to={'/'}>
                  <div className="logo" id="logodiv">
                  </div>
                </Link>
                
                <Menu onClick={this.handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" style={{'display':'inline-block', 'vertical-align': 'top'}}>
                <Menu.Item key="1" style={{'padding-left':10, 'padding-right':10}}>Discover</Menu.Item>
                  <Menu.Item key="2" style={{'padding-left':10, 'padding-right':10}}>MyList</Menu.Item>
                </Menu>
                <div id="searchbox">
              <Search placeholder="input search text" onSearch={value => console.log(value)}  enterButton />
              </div>
              </Header>
  
              <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                
                <FoodPage title={this.props.location.pathname.split('/food/')[1]}/>
  
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
              <Menu onClick={this.handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{'display':'inline-block', 'vertical-align': 'top'}}>
                  <Menu.Item key="1" style={{'padding-left':10, 'padding-right':10}}>Discover</Menu.Item>
                  <Menu.Item key="2" style={{'padding-left':10, 'padding-right':10}}>MyList</Menu.Item>
              </Menu>
              <div id="searchbox">
              <Search placeholder="input search text" onSearch={value => console.log(value)}  enterButton />
              </div>
              <Popover content={content} title="Login" trigger="hover" placement="bottomRight">
                <Avatar id="avatar" size="large" icon={<UserOutlined />}/>
              </Popover>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              
              <MainList/>

            </Content>
            <Footer style={{ textAlign: 'center' }}>MadCamp 2020 Summer - Created by Youngjae Jang and Hongseok Kang</Footer>
          </Layout>
        );
    }
    
}
export default Home;