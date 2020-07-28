import React, { Component } from "react";
import { Icon } from 'semantic-ui-react'
import { Result, Button, Divider} from 'antd';
import { Row, Col } from 'antd';
import { SmileOutlined, CaretRightOutlined } from '@ant-design/icons';
import Speech from 'react-speech';
import { Link } from "react-router-dom";
import "./RecipeContainer.css"

class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }
  render() {
    const time = this.props.time;
    return (
      <div className="displayedTime">
        <p id="timeIndi">{this.format(time)}</p>
      </div>
    )
  }
}
class ButtonTime extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClickHandler}>{this.props.label}</button>
    );
  }
}

const style = {
  play: {
    button: {
      width: '28px',
      height: '28px',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'yellow',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    },
  }
};

class RecipeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      running: false,
      recipe: [],
      times: [],
      stepnum: 0,
      stepArr: "",
      props_check: 0
    }
    var toggle_check = 1;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      this.setState({ count: this.props.cur_count });
      switch (this.state.running) {
        case true:
          this.handleStart_Stop();
      }
    }
  }

  handleStart_Stop() {
    if (this.toggle_check) {
      this.timer = setInterval(() => {
        const newCount = this.state.count - 1;
        this.setState(
          { count: newCount >= 0 ? newCount : 0 }
        );
      }, 1000);
      this.toggle_check = 0;
    } else {
      this.toggle_check = 1;
      this.handleStop();
    }
  }

  handleStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState(
        { running: false }
      );
    }
  }

  handleReset() {
    this.setState(
      { count: this.props.cur_count }
    );
  }

  gotomain(){

  }

  render() {
    console.log("stepnum:", this.props.stepnum);
    if (this.props.special == 0) {
      return (
        <div id="step_zero">
          <Row>
            <Col flex={2}>
            <h2> Ingredients </h2>
            <p id="ingredients"> {this.props.ingredients} </p>
            <p id="startMsg">Let's Start!</p>
            </Col>
          </Row>
        </div>
      );
    }
    else if (this.props.special == 2) {
      return (
        <Result
          icon={<SmileOutlined />}
          title="Well Done!"
          subTitle="You did great job. Enjoy your meal :)"
          extra={[
            <Link to={'/'}><Button type="primary" key="console"> Go to Main </Button></Link>
          ]}
        />
      );
    }
    else {
      if (this.state.count == 1) {
        this.setState({
          count: this.props.cur_count,
          props_check: this.props.cur_count
        });
      }
      if (this.props.cur_count != this.state.props_check) {
        this.setState({
          count: this.props.cur_count,
          props_check: this.props.cur_count
        })
        this.toggle_check = 1;
        this.handleStop();
      }
      return (
        <div>
          <div id="stepDiv">
            <p id="currentStep"> {this.props.cur_recipe} 
            <Speech
              text={this.props.cur_recipe}
              voice="Daniel" /> 
            </p>
            <p> {this.state.steps} </p>
          </div>
          <div id="timerDiv">
            <Clock time={this.state.count} />
            <Button type="primary" shape="round" icon={<CaretRightOutlined />} onClick={this.handleStart_Stop.bind(this)} size={'large'}>
              Start/Pause
            </Button>
            <Button shape="round"  onClick={this.handleReset.bind(this)} size={'large'}>
              Reset
            </Button>
          </div>
        </div>
      );
    }
  }
}
export default RecipeContainer;