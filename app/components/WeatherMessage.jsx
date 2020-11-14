var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <h2>It is {temp} degrees in {location}</h2>
    );
  }
});

module.exports = WeatherMessage;
