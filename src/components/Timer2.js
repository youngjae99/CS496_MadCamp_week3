import React, { Component } from 'react'


class Timer2 extends Component {
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
          <h1>{this.format(time)}</h1>
        </div>
      )
    }
  }
  export default Timer2;
  
  class Input extends Component {
    
    onSubmit(event) {
      event.preventDefault();
      const strSeconds = this.refs.seconds.value;
      if(strSeconds.match(/[0-9]/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10));
      }
    }
    
    render() {
      return (
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="seconds" placeholder="enter time in seconds"/>
          <input type="submit" value="Start"></input>
        </form>
      )
    }
  }
  
  export default class TimerButton extends Component {
    render() {
      return (
          <button onClick={this.props.onClickHandler}>{this.props.label}</button>    
      );
    }
  }