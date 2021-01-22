var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <h4 className="text-center">It is {temp} degrees in {location}</h4>
    );
  }
});

module.exports = WeatherMessage;
