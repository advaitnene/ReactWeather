var React = require('react');

// componentDidMount is used to modify the component after it is rendered on the screen.
/* componentWillMount is used to make any changes to the component before it gets rendered. It is not
used in this project */

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Title</h4>
        <p>Message</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
