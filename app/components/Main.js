var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <div className='container'>
                {this.props.children}// work same as main layouts in other framewrok
            </div>
        )
    }
});

module.exports = Main;