var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      //location: 'India',
      //temp: 30
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      //debugger;
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(errMessage) {
      that.setState({
        isLoading: false
      });
      alert(errMessage);
    });
  },
  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage() {
      if(isLoading) {
        return(
          <h3 className="text-center">Fetching data...</h3>
        );
      } else if(temp && location) {
        return (
          <WeatherMessage location={location} temp={temp}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
