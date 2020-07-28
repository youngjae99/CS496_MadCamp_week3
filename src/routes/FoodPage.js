import React, {Component} from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Item from "../components/Item";
import Navigation from "../components/Navigation";
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';


var foodlist = []

class FoodPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title:"",
        loading:true,
        ingredients: [],
        recipe: [],
        times:[],
        stepnum: 0,
        stepArr:"",
        special:1
      }
      //this.setState({title: this.props.location.pathname.split('/food/')[1]});
      console.log("title : ",this.props.title);
    }

    componentWillMount(){
        
    }
    componentDidMount(){
    }
        
    render(){
        console.log("Main List render in!");
        
        return (
          <>
          <PageHeader
            onBack={() => window.history.back()}
            title={this.props.title}
            tags={<Tag color="blue">Running</Tag>}
            subTitle="This is a subtitle"
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
            ]}
          >
            <Row>
              <Statistic title="Status" value="Pending" />
              <Statistic
                title="Price"
                prefix="$"
                value={568.08}
                style={{
                  margin: '0 32px',
                }}
              />
              <Statistic title="Balance" prefix="$" value={3345.08} />
            </Row>
          </PageHeader>
          </>
        );
    }
}
export default FoodPage;