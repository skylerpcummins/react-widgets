var React = require('react');
var ReactDOM = require('react-dom');

var SearchComponent = React.createClass({
  getInitialState: function(){
    return { searchString: '' };
  },

  handleChange: function(e) {
    this.setState({ searchString: e.target.value });
  },

  clickHandler: function(name) {
    this.setState({ searchString: name });
  },

  render: function() {
    var namesList = this.props.names;
    var searchString = this.state.searchString.trim().toLowerCase();
    var that = this;

    if (searchString.length > 0) {
      namesList = namesList.filter(function(n){
        return n.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text"
               value={this.state.searchString}
               onChange={this.handleChange}
               placeholder="Type here" />

        <ul>
          {
            namesList.map(function(n, i) {
            return <li onClick={that.clickHandler.bind(null, n.name)}
                       key={i}>{n.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = SearchComponent;
