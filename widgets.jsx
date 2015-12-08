var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./nameSearch.jsx');
var ClockComponent = require('./clock.jsx');
var WeatherComponent = require('./weather.jsx');
var TabsComponent = require('./tabs.jsx');

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

var tabsList = [
  {title: 'Tab1', content: 'Content1'},
  {title: 'Tab2', content: 'Content2'},
  {title: 'Tab3', content: 'Content3'}
];

var Widget = React.createClass({
  render: function(){
    return(
      <div>
        <SearchComponent names={namesList} />
        <ClockComponent />
        <WeatherComponent />
        <TabsComponent tabs={tabsList}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget/>,
                  document.getElementById('main'));

});
