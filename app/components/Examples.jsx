var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-centered">Examples</h1>
        <p>Here are a few locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Mumbai'>Mumbai</Link>
          </li>
          <li>
            <Link to='/?location=Pune'>Pune</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
