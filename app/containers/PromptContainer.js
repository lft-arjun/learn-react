/**
 * Created by linux on 7/7/16.
 */

var React = require('react');

var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            'username': ''
        }

    },
    handleUpdateUser: function (event) {
        this.setState({
            username: event.target.value
        })
    },
    handleSubmitUser: function(event) {
        event.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerone) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerone: this.props.routeParams.playerone,
                    playertwo: this.state.username
                }
            });
        } else {
            this.context.router.push('/playertwo/'+ this.state.username);
        }

    },
    render: function () {
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}
            />
        );
    }
});

module.exports = PromptContainer;