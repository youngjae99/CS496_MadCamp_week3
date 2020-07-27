import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { Button, Grid, Popup } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";



class Item extends Component{
    constructor(props) {
        super(props);
      }

      state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })
      
    render(){
        return(
            <li key={this.props.title}>
                    <img id="thumb" src={this.props.img}></img>
                    <p class="title">{this.props.title.replace("_"," ")}</p>
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
            </li>
        );
    };
}

export default Item;