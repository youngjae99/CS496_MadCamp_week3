import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Item.css";
//import { Button, Grid, Popup } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import {Popover, Button, Typography} from 'antd';
import "antd/dist/antd.css";

const { Title } = Typography;


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
      
    render(){
        return(
            <li key={this.props.title}>
                <Link to={'/mobile/'+this.props.title}
                        param={this.props.title}
                        >
                    <div class="cropping">
                        <img id="thumb" src={this.props.img}></img>
                    </div>
                    <Title level={4}>
                        {this.props.title.replace(/_/g," ")}
                    </Title>
                    </Link>             
                
                    <Popover
                        content={<div><p><QRCode value={"/mobile/"+this.props.title} size="100" class="qr"/></p><a onClick={this.hide}>Close</a></div>}
                        title="Scan this!"
                        placement="bottom"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Button type="primary">Send to phone</Button>
                    </Popover>
            </li>
        );
    };
}

export default Item;