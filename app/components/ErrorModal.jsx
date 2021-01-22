var React = require('react');

var ErrorModal = React.createClass({
  render: function() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Title</h4>
        <p>Message</p>
        <p>
          <button className="button hollow" data-close>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
