import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import "./Home.css";
import Navigation from "../components/Navigation";
import { Layout, Menu, Breadcrumb, Typography, Avatar, Input} from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


var foodlist = []

class Home extends Component{
    state = { 
        foods: []
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
            );
    }
    componentDidMount(){
    }
        
    render(){
        console.log("render in!");
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
            </Content>
            <Footer style={{ textAlign: 'center' }}>KAIST ?2020 Created by Youngjae Jang and Hongseok Kang</Footer>
          </Layout>
        );
    }
    

    /*
    //initialize state in the constructor for class based components
  constructor(props) {
    super(props);
    //foods must be an empty array otherwise .length may fail
    this.state = { 
        foods: [] 
    }
  };

  //once the component has mounted, call the method which will perform the fetch
  componentDidMount() {
    this.fetchFoodData();
  }

  //calls the endpoint which returns a promise. The promise will then set the components state, which will trigger a render
  fetchFoodData = () => {
    fetch('http://192.249.19.243:0280/main/get_recipes')
      .then(res => {
        const foodData = res.json();
        Promise.resolve(foodData).then(
            value=>{console.log("value: ",value)
            const foods = value.map((item) => this.state.foods.push({ title: item, img: "http://192.249.19.243:0280/main/image/" + item}));
            this.setState({ foods: foods })
            console.log(">>",this.state.foods);
        });
      })
      .catch(err => {
        //handle errors here
        console.log(err);
      });
  };
  //React calls this method when props or state change for this component
  render() {
    return (
      <div>
        <ul>
          {
            console.log("in render", this.state.foods),
            this.state.foods.length != 0 ?
            this.state.foods.map(item =>
                <Item
                  title={item.title}
                  img={item.img} />
              )
              :
              <p id="loadingMsg">Data Loading...</p>
          }
        </ul>
      </div>
    );
  }
  */
}
export default Home;