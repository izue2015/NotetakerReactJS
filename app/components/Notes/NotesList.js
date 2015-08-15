var React = require('react');

var NotesList = React.createClass({
	render: function() {
		var notes = this.props.notes.map(function(note, index){
			console.log(note['.value']);
			return <li className="list-group-item" key={index}> {note['.value']} </li>
		})
		return (
			<ul className="list-group">
				{notes}
			</ul>
		);
	}
})
module.exports = NotesList;
