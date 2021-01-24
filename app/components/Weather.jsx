var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      //debugger;
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      //Used to reset the query string and remove the location parameter.
      window.location.hash = '/#';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      //Used to reset the query string and remove the location parameter.
      window.location.hash = '/#';
    }
  },
  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

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

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
