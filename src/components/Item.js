import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Item.css";
//import { Button, Grid, Popup } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import {Popover, Button, Typography, Card} from 'antd';
import { HeartOutlined, QrcodeOutlined } from '@ant-design/icons';
import axios from 'axios';
import "antd/dist/antd.css";

const { Title } = Typography;
const { Meta } = Card;


class Item extends Component{
    constructor(props) {
        super(props);
      }

    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

    state = {
        visible: false,
    };

    hide = () => {
    this.setState({
        visible: false,
    });
    };

    handleVisibleChange = visible => {
    this.setState({ visible });
    };

    componentDidMount(){
        console.log("item loaded!");
    }

    like({title}){
        if(window.sessionStorage.getItem('logged')){
            console.log(window.sessionStorage.getItem('id')," logged in");
            console.log("like btn pressed", title);
            axios.post('http://192.249.19.243:0280/user/like_food', {
                id: "youngjae",
                recipe_name: title
            });
        }
        else{
            alert("Please Log in!");
        }
        
    }
      
    render(){
        return(
            <li class="menucard" key={this.props.title}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={this.props.img} />}
                actions={[
                    <HeartOutlined key="like" onClick={this.like(this.props.title)}/>,
                    <Popover
                    content={<div><p><QRCode value={"143.248.229.69:3000/#"+"/mobile/"+this.props.title} size="100" class="qr"/></p><a onClick={this.hide}>Close</a></div>}
                    title="Scan this!"
                    placement="bottom"
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}>
                    <QrcodeOutlined key="qr"/>
                    </Popover>,
                ]}>
                    
                <Link to={'/food/'+this.props.title}
                param={this.props.title}>
                <Meta title={this.props.title.replace(/_/g," ")}/>
                </Link>                
            </Card>
            </li>
        );
    };
}

export default Item;