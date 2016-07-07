/**
 * Created by linux on 7/7/16.
 */

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route =  ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
    <Router>
        <Route path="/" component={Main} >
            <Route path="/home" component={Home} />
        </Route>
    </Router>
);

moudule.exports = routes;