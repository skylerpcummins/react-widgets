var React = require('react');
var ReactDOM = require('react-dom');

var ClockComponent = React.createClass ({
  getInitialState: function() {
    return { time: new Date() };
  },

  tick: function() {
    var currentTime = this.state.time;
    currentTime.setSeconds(currentTime.getSeconds()+1);
    this.setState({ time: currentTime });
  },

  componentDidMount: function() {
    this.intervalId = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.intervalId);
    this.intervalId = 0;
  },

  render: function() {
    return <div>{this.state.time.toString()}</div>;
  }
});

module.exports = ClockComponent;
