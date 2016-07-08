/**
 * Created by linux on 7/7/16.
 */
var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var gitHubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        };
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        var query =  this.props.location.query;
        gitHubHelpers.getPlayerInfo([query.playerone, query.playertwo])
            .then(function (players) {
                this.setState({
                   isLoading: false,
                   playersInfo: [players[0], players[1]]
                });
            }.bind(this));
        //fetch info from github
        console.log('componentDidMount');
    },
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },
    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
            />
        );
    }
});




module.exports = ConfirmBattleContainer;
