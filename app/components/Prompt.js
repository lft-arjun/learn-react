/**
 * Created by linux on 7/7/16.
 */
var React = require('react');
var PropTyples = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
//functional stateless components

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github username"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            type="text" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Prompt.propTyples = {
    header: PropTyples.string.isRequired,
    onUpdateUser: PropTyples.func.isRequired,
    onSubmitUser: PropTyples.func.isRequired,
    username: PropTyples.string.isRequired
};

module.exports = Prompt;