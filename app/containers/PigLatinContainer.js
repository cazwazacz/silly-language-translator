var PigLatin = require('../components/PigLatin');
var React = require('react');
var marked = require('marked');
var Parser = require('html-react-parser');
var translators = require('../utils/translators')

var PigLatinContainer = React.createClass({
	getInitialState: function () {
      return {
      	markdown: ''
      }
	},
	handlePigLatin: function (e) {
		//console.log(translators.pigLatin(e.target.value));
      this.setState({
      	pigLatin: translators.pigLatin(e.target.value)
      })
	},
	render: function() {
		return (
			<div>
				<div>
					<PigLatin 
					translated={this.state.pigLatin}
					onPigLatin={this.handlePigLatin}/>
				</div>			
			</div>


		);
	}

});

module.exports = PigLatinContainer;