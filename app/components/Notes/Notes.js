var React = require('react');

var Notes = React.createClass({
	render: function() {
		return (
			<div>
				NOTES <br />
				Username: {this.props.username} <br />
				Notes: {this.props.notes}
			</div>
		);
	}
});

module.exports = Notes;
