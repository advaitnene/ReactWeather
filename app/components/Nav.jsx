var React = require('react');
var {Link, IndexLink} = require('react-router');

/* Link component can be replaced by normal html <a> tags. But prefer using Link component as it provides
extra styling properties to the links with Reacts in-built classes */

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Code yet to be written!');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
