var React = require('react');
var styles = require('../styles');

function Home (props) {
	return (
      <div className="container">
      
        <div className="row">
        <h1>Pig Latin</h1>
        <div className="col-sm-6 form-group">
        <textarea
        className='form-control' 
        style={styles.textarea}
        placeholder="English goes in here..."
        onChange={props.onPigLatin}
        value={props.text}>
        </textarea>
        </div>
        <div 
        className="col-sm-6"
        style={styles.markdown}>
        {props.translated}
        </div>
        </div>

      </div>
	)
}

module.exports = Home;
