var React = require('react');
var ReactDOM = require('react-dom');

var TabsComponent = React.createClass({
  getInitialState: function() {
    return { selected: 0 };
  },

  clicked: function(index) {
    this.setState({ selected: index });
  },

  render: function() {
    var tabsList = this.props.tabs;
    // var that = this;

    return (
      <ul>{
        tabsList.map(function(t, i) {
          var style = {};

          if (this.state.selected === i) {
            style = {fontWeight: 'bold'};
          }

          return(
            <li key={i} style={style} onClick={this.clicked.bind(null, i)}>
              {t.title}
              {this.state.selected === i ? <article>{t.content}</article> : ""}
            </li>
          );

        }.bind(this))
      }</ul>
    );
  }
});

module.exports = TabsComponent;
