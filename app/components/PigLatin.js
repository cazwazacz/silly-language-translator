var React = require('react');
var styles = require('../styles');

function Home (props) {
	return (
        <div>
        <div className="container-fluid text-center" style={styles.bg1}>
            Pig Latin
        </div>
            <div className="container-fluid" style={styles.bg2}>
            
              <div className="row">

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
        </div>

	)
}

module.exports = Home;
