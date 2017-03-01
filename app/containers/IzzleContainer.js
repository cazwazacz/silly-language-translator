var Izzle = require('../components/Izzle');
var React = require('react');
var translators = require('../utils/translators')

var PigLatinContainer = React.createClass({
	getInitialState: function () {
      return {
      	markdown: ''
      }
	},
	handleIzzle: function (e) {
      this.setState({
      	pigLatin: translators.izzle(e.target.value)
      })
	},
	render: function() {
		return (
			<div>
				<div>
					<Izzle 
					translated={this.state.pigLatin}
					onIzzle={this.handleIzzle}/>
				</div>			
			</div>


		);
	}

});

module.exports = PigLatinContainer;