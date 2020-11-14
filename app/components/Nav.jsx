var React = require('react');
var {Link, IndexLink} = require('react-router');

/* Link component can be replaced by normal html <a> tags. But prefer using Link component as it provides
extra styling properties to the links with Reacts in-built classes */

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
