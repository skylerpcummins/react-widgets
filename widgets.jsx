var React = require('react');
var ReactDOM = require('react-dom');

var test = "TEST";

var SearchComponent = React.createClass({

  getInitialState: function(){
    return {searchString: ''};
  },

  handleChange: function(e) {

    this.setState({ searchString: e.target.value });
  },

  clickHandler: function() {
    console.log("hello!");
  },

  render: function() {
    var namesList = this.props.names;
    var searchString = this.state.searchString.trim().toLowerCase();
    // debugger;
    if (searchString.length > 0) {
      namesList = namesList.filter(function(n){
        // return true;
        return n.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString}
          onChange={this.handleChange}
                placeholder="Type here" />

        <ul>
          { namesList.map(function(n, i) {
            return <li key={i}>{n.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});
var namesList = [
  {name: 'John'},
  {name: 'Jacob'},
  {name: 'Jingleheimer'},
  {name: 'Schmidt'},
  {name: 'Kareem'},
  {name: 'Max'},
  {name: 'Haseeb'},
  {name: 'Asher'},
  {name: 'Brooke'}
];

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<SearchComponent names={namesList} />,
  document.getElementById('main'));
  console.log("TEST");
});
