import React, {Component} from "react";
import Timer from "./Timer";
import { Icon } from 'semantic-ui-react'
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';



class Clock extends React.Component {
    format(time) {
      let seconds = time % 60;
      let minutes = Math.floor(time / 60);
      minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
      seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
      return minutes + ':' + seconds;
    }
    render () {
      const {time} = this.props;
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

class RecipeContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
          count: 120,
          running: false,

          recipe: [],
          times:[],
          stepnum: 0,
          stepArr:""
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.state.running !== prevState.running){
          switch(this.state.running) {
            case true:
                this.handleStart();
          }
        }
    }
      
      handleStart() {
        console.log("handleStart in!");
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
            {count: newCount >= 0 ? newCount : 0}
            );
        }, 1000);
      }
      
      handleStop() {
        if(this.timer) {
          clearInterval(this.timer);
          this.setState(
            {running:false}
          );
        }
      }
      
      handleReset() {
        this.setState(
          {count: 120}
        );
      }
      
      handleCountdown(seconds) {
        this.setState({
          count: seconds,
          running: true
        })
      }

      handleStartStop(){
        switch(this.state.running) {
            case false:
                console.log("start!");
                this.setState({running: true});
            case true:
                console.log("stop!");
                this.setState({running: false});
        }
      }

    render() {
        console.log("stepnum:",this.props.stepnum);
        if(this.props.special==0){
            return (
                    <div id="step_zero">
                        <div id="imgbox">
                            <img id="mainImg" src={this.props.img} height="400"></img>
                        </div>
                            
                            <h2> Ingredients </h2>
                            <p id="ingredients"> {this.props.ingredients} </p>
                            <p id="startMsg">Let's Start!</p>
                    </div>
            );
        }
        else if(this.props.special==2){
            return (
                <Result
                    icon={<SmileOutlined/>}
                    title="Well Done!"
                    subTitle="You did great job. Enjoy your meal :)"
                    extra={[
                    <Button type="primary" key="console"> Go to Main </Button>
                    ]}
                />
            );
        }
        else{
            return (
                <div>
                <div id="stepDiv">
                        <p id="currentStep"> {this.props.cur_recipe} </p>
                        <p> {this.state.steps} </p>
                </div>
                <div id="timerDiv">
                    <Clock time={this.props.cur_count}/>
                    <Button icon labelPosition='left' onClick={this.handleStart.bind(this)}>
                        <Icon name='play' />
                        Start
                    </Button>
                    <ButtonTime label="STOP" onClickHandler={this.handleStop.bind(this)}/>
                    <ButtonTime label="reset" onClickHandler={this.handleReset.bind(this)}/>
                </div>
                </div>
            );
        }

        
    }
}
export default RecipeContainer;