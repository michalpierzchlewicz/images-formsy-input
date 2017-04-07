var React = require('react');
var ReactDOM = require('react-dom');
var ImagesFormsyInput = require('images-formsy-input');

var App = React.createClass({
	render () {
		return (
			<div>
				<ImagesFormsyInput />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
