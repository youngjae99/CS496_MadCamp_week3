import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { Button, Grid, Popup } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import {Popover} from 'antd';



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
                    <div class="cropping">
                        <img id="thumb" src={this.props.img}></img>
                    </div>
                    <p class="title">{this.props.title.replace(/_/g," ")}</p>
                    <Link to={'/menu/'+this.props.title}
                        param={this.props.title}
                        >
                        <button class="ui button">Recipe</button>
                    </Link>
                <Popup wide trigger={<Button content={<i class="fas fa-qrcode fa-2x"></i>} />} position='bottom center' on='click'>
                        <Grid divided columns='equal'>
                        <Grid.Column>
                            <p>Scan this code with your phone</p>
                        </Grid.Column>
                        <Grid.Column>
                            <QRCode value={"/menu/"+this.props.title} size="100" class="qr"/>
                        </Grid.Column>
                        </Grid>
                    </Popup>

                    <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Button type="primary">Click me</Button>
                    </Popover>
            </li>
        );
    };
}

export default Item;