var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 text-center">
					<h1>Silly Language Translators</h1>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-sm-4">
					<Link to="piglatin">
						<button className="btn btn-lg">Pig Latin</button>
					</Link>
					<p>
						A secret language formed from English by transferring the initial consonant or consonant cluster of each word to the end of the word and adding a vocalic syllable.
					</p>
					</div>
					<div className="col-sm-4">
					<Link to="izzle">
						<button className="btn btn-lg">Izzle</button>
					</Link>
					<p>
						Insert "-izzle" after a word's last pre-vowel consonant while discarding the remaining letters.					</p>
					</div>
					<div className="col-sm-4">
					<Link>
						<button className="btn btn-lg">Other Lang 3</button>
					</Link>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Home;