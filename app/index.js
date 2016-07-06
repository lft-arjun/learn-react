/**
 * Created by linux on 7/6/16.
 */
var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
        return(
            <div className='jumbotron'> Hello World </div>

        )
    }
});

ReactDom.render(
    <HelloWorld />,
    document.getElementById('app')
);