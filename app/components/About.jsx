var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is an application to get weather details from any location.
          I have developed this application using React framework and openweathermap API.
        </p>
    </div>
    );
  }
});

module.exports = About;
