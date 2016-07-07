/**
 * Created by linux on 7/7/16.
 */

var React = require('react');
var PropTypes =  React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetail');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p>Loading</p>
        :   <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2'>
                    <UserDetailsWrapper header="Player 1">
                        <UserDetails info={props.playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player 2">
                        <UserDetails info={props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                    <div className='col-sm-12'>
                        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle} style={styles.space}>Initiate Battle!</button>
                    </div>
                    <div className='col-sm-12'>
                       <Link to="/playerone">
                           <button type='button' className='btn btn-lg btn-danger' style={styles.space}>Reselect Players</button>
                       </Link>
                    </div>
                </div>
            </div>

};

ConfirmBattle.prototype = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired

};

module.exports = ConfirmBattle;
