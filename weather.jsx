var React = require('react');
var ReactDOM = require('react-dom');

var WeatherComponent = React.createClass({
  getInitialState: function() {
    return { currentWeather: 'pending', temperature: 'pending' };
  },

  componentDidMount: function() {
    var success = function(pos){
      var crd = pos.coords;
      var lat = crd.latitude;
      var lon = crd.longitude;
      this.ourAJAXRequestFunction(lat, lon);
    }.bind(this);

    navigator.geolocation.getCurrentPosition(success);
  },

  ourAJAXRequestFunction: function(lat, lon) {
    var xmlhttp = new XMLHttpRequest();

    var url = "http://api.openweathermap.org/data/2.5/weather",
        apiKey = "645c5d39c7603f17e23fcaffcea1a3c1",
        query = "?lat="+ lat + "&lon=" + lon + "&APPID=" + apiKey;

    xmlhttp.onload = function() {
      var weatherParsed = JSON.parse(xmlhttp.responseText);
      var temperature = weatherParsed["main"]["temp"];
      var weather = weatherParsed["weather"][0]["description"];

      this.setState({currentWeather: weather, temperature: temperature});
    }.bind(this);

    // xmlhttp.onreadystatechange = function() {
    //   if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
    //       if(xmlhttp.status === 200){
    //         var weatherParsed = JSON.parse(xmlhttp.responseText);
    //         var temperature = weatherParsed["main"]["temp"];
    //         var weather = weatherParsed["weather"][0]["description"];
    //
    //         this.setState({currentWeather: weather, temperature: temperature});
    //       }
    //   }
    // }.bind(this);

    xmlhttp.open("GET", url + query , true);
    xmlhttp.send();
  },

  render: function() {
    // this.ourAJAXRequestFunction();
    return <div>
            <ul>
              <li>
                {this.state.currentWeather}
              </li>
              <li>
                {this.state.temperature}
              </li>
            </ul>
          </div>;
  }
});

module.exports = WeatherComponent;
