/**
 * Created by linux on 7/8/16.
 */
var React = require('react');
var PropTypes  = React.PropTypes;

var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState: function () {
      return {
          isLoading: true,
          scores: []
      }
    },
    componentDidMount: function () {
        // console.log(this.props.location.state.playersInfo);
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                console.log(scores);
                this.setState({
                   scores: scores,
                    isLoading: false
                });
            }.bind(this))
    },
    render: function () {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo = {this.props.location.state.playersInfo}
                scores={this.state.scores}/>
        );
    }
});

module.exports = ResultsContainer;