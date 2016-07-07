/**
 * Created by linux on 7/6/16.
 */
var USER_DATA = {
    name: 'Tyler MCGinnis',
    username: 'tylermcginnis',
    image: 'https://avatars2.githubusercontent.com/u/2933430?v=3&s=400',
}

var React = require('react');
var ReactDom = require('react-dom');



var ProfilePic = React.createClass({

    render: function() {
        return (
            <img src={this.props.imageUrl} style={{height:100, width:100}} className="img-responsive img-thumbnail" />

        );
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.github.com/' + this.props.username}>
            {this.props.username}
        </a>
        );
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
});
var Avatar = React.createClass({
    render: function() {
        return (
            <div className="row">
                <h2>React First Page</h2>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileLink username={this.props.user.username} />
                <ProfileName name={this.props.user.name} />
            </div>
        );
    }
});

ReactDom.render(
<Avatar user={USER_DATA} />,
    document.getElementById('app')
);

