/**
 * Created by linux on 7/8/16.
 */
var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            {props.children}
        </div>
    )
};

module.exports = MainContainer;

