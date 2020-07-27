import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import "./Home.css";
import Navigation from "../components/Navigation";

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
            <div>
            <Navigation/>
            <div>
                <ul>
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
            </div>
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